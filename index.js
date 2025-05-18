import "./src/helpers/env.js";
import express from "express";
import cookieParser from "cookie-parser";
import compression from "express-compression";
import dbConnect from "./src/helpers/dbConnect.helper.js";
import indexRouter from "./src/routers/index.router.js";
import winston from "winston/lib/winston/config/index.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import argvs from "./src/helpers/arguments.helper.js";
import logger from "./src/helpers/logger.helper.js";

const srv = express();
const PORT = process.env.PORT || 8080;
const ready = async() => {
    logger.INFO("Server ready on port " + PORT + " and mode " + argvs.mode);
    logger.INFO("Server ready on Pid " + process.pid);
    await dbConnect(process.env.LINK_DB);
};

srv.listen(PORT, ready);

srv.use(compression({brotli: {enabled: true, zlib: {} }}));
srv.use(cookieParser());
srv.use(express.json());
// srv.use(winston); quité winston de acá porque srv.use tiene que tener un middleware y no lo es
srv.use(express.urlencoded({extended: true}));
srv.use(express.static("public"));
srv.use("/", indexRouter);
srv.use(pathHandler);
srv.use(errorHandler);