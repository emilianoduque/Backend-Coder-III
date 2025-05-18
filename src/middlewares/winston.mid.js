import logger from "../helpers/logger.helper.js"

const winston = (req, res, next) => {
    req.logger = logger;
    logger.http(`${req.method} ${req.url} - ${new Date().toLocaleDateString}`);
    next();
};

export default winston;