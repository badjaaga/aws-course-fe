import { Config } from "./config.interface";

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: "https://3wk8qxh4g4.execute-api.eu-west-1.amazonaws.com/dev",
    order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
    import: "https://ufbk6obmeb.execute-api.eu-west-1.amazonaws.com/dev",
    bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
    cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
