import axios from "axios";

/**
 *
 * @param {('info'|'warn'|'error')} type
 * @param {string} location
 * @param {string} message
 */
export async function logger(type = "info", location, message) {
  if (type != "info" && "warn" && "error"){
      console.error('type of log is incorrect')
  };
  let loggerAddress = `${window.location.origin}/api/logger`
  if (process.env.NODE_ENV === "development") {
    loggerAddress = "http://127.0.0.1:8080/api/logger";
  }
  try {
    let log = {
      data: message,
      type: type,
      location: location,
      userAgent: navigator.userAgent,
    };

    log = btoa(JSON.stringify(log));
    await axios.post(loggerAddress , {log : log})
  } catch (error) {
      console.error('logger-' , error )
  }
}
