const winston = require('winston');

const format = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.colorize(),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format,
      level: 'debug',
    }),
  ],
});

module.exports = logger;
