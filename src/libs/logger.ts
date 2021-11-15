/* eslint-disable no-console */
/* eslint-disable  @typescript-eslint/no-explicit-any */
const logger = {
  log: (message?: any, ...optionalParams: any[]): void => {
    console.log(message, optionalParams);
  },
  info: (message?: any, ...optionalParams: any[]): void => {
    console.info(message, optionalParams);
  },
  error: (message?: any, ...optionalParams: any[]): void => {
    console.error(message, optionalParams);
  },
};

export default logger;
