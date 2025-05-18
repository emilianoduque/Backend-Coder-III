import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import {usersManager} from "../dao/manager.mongo.js";
import {createToken} from "../helpers/token.helper.js";
import {compareHash, createHash} from "../helpers/hash.helper.js";
import { create } from "connect-mongo";
import User from "../dao/models/users.model.js";

passport.use(
    "register",
    new LocalStrategy(
    {
        passReqToCallback: true,
        usernameField: "email"
    },
    async(req, email, password, done) => {
        try {
            const userExists = await usersManager.readyBy({email});
            if(userExists) {
                return done(null, null, {message: "Invalid credentials", statusCode: 401});
            }
            req.body.password = createHash(password);
            const user = await usersManager.createOne(req.body);
            done(null, user);
        } catch (error) {
            done(error);
        }
    }
    )
);

passport.use(
    "login",
    new LocalStrategy(
        {
            passReqToCallback: true,
            usernameField: "email"
        },
        async(req,email, password, done) => {
            try {
                const user = await usersManager.readyBy({email});
                if(!user){
                    return done(null, null, {message: "Invalid credentials", statusCode: 401});
                }
                const verifyPassword = compareHash(password, user.password);
                if(!verifyPassword){
                    return done(null,null, {message: "Invalid credentials", statusCode: 401});
                }
                const token = createToken({
                    email: user.email,
                    rol: user.rol,
                    user_id: user._id,
                });
                req.token = token;
                done(null,user);
            } catch (error) {
                done(error)
            }
        }
    )
);

passport.use(
    "jwt-auth",
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_KEY,
        },
        async(data, done) => {
            try {
                const {user_id} = data;
                const user = await User.findById(user_id);
                if(!user){
                    return done();
                }
                done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use(
    "jwt-adm",
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJwt.fromExtractors([(req) => req?.cookies?.token]),
            secretOrKey: process.env.JWT_KEY,
        },
        async(data, done) => {
            try {
                const {user_id, rol} = data;
                const user = await User.findById(user_id);
                if(user.rol !== "ADMIN"){
                    return done(null);
                }
                done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

export default passport;