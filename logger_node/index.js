const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createLogger, format, transports } = require("winston");
const { combine, splat, timestamp, printf } = format;

const port = 5000;
const app = express();

const myFormat = printf(({ level, message, timestamp, ...metadata }) => {
  let msg = `${timestamp} [${level}] ${message} `;
  return msg;
});

const logger = createLogger({
  format: combine(format.colorize(), splat(), timestamp(), myFormat),
  transports: [new transports.Console({ level: "info" })],
});

app.use(cors());
app.use(bodyParser.json()), app.use(bodyParser.urlencoded({ extended: false }));
app.post("/", (req, res) => {
  try {
    let log = req.body.log;
    let buff = new Buffer.from(log, "base64");
    log = buff.toString("ascii");
    log = JSON.parse(log);
    let logMessage =
      "FROM: " +
      req.headers["user-agent"] +
      " : " +
      log.location +
      " => " +
      log.data;
    switch (log.type) {
      case "error":
        logger.error(logMessage);
        break;
      case "warn":
        logger.warn(logMessage);
        break;
      case "info":
        logger.info(logMessage);
        break;
    }
  } catch (error) {
    logger.error('Logger: ',error);
  }

  res.status(200).json("success");
});

app.listen(port, () => {
  logger.info("logger listening at */logger");
});
