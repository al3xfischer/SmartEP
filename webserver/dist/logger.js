"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const options = {
    file: {
        level: "info",
        filename: `${__dirname}/logs/app.log`,
        handleExecptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colosrize: true
    },
    console: {
        level: "debug",
        handleExceptions: true,
        json: true,
        colorize: true
    }
};
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false
});
logger.stream = {
    write: (message, encoding) => {
        logger.info(message);
    }
};
exports.default = logger;
//# sourceMappingURL=logger.js.map