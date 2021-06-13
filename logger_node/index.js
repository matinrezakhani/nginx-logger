const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("node-color-log");

const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json()), app.use(bodyParser.urlencoded({ extended: false }));
app.post("/", (req, res) => {
  try {
    let log = req.body.log;
    let buff = new Buffer.from(log, "base64");
    log = buff.toString("ascii");
    log = JSON.parse(log);
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    let logMessage ='FROM: ' + ip +' / '+req.headers["user-agent"] + " : " + log.location +" => " + log.data
    switch (log.type) {
      case "error":
        logger.error(logMessage);
        break;
      case "debug":
        logger.debug(logMessage);
        break;
      case "warn":
        logger.warn(logMessage);
        break;
      case "info":
        logger.info(logMessage);
        break;
      default:
        break;
    }
  } catch (error) {
    logger.error(error);
  }

  res.status(200).json("success");
});

app.listen(port, () => {
  console.log(`logger listening at */logger`);
});
