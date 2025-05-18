import { hashSync, compareSync, genSaltSync } from "bcrypt";

const createHash = (password) => {
    const salt = genSaltSync(8);
    const hashPassword = hashSync(password, salt);
    return hashPassword;
};

const compareHash = (bodyPassword, dbPassword) => {
    const verify = compareSync(bodyPassword, dbPassword);
    return verify;
}

export {createHash, compareHash};