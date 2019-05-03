import winston = require("winston");

const options = {
  file: {
    level: "info",
    filename: `${__dirname}/logs/app.log`,
    handleExecptions: true,
    json: true,
    maxsize: 5242880, //5MB
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

logger.stream = <any>{
  write: (message: any, encoding: any) => {
    logger.info(message);
  }
}

export default logger;
