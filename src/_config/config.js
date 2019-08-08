import { envs } from "@constants/environments";

import { config as dev } from "@environments/dev";
import { config as prod } from "@environments/prod";

const { REACT_APP_ENVIRONMENT } = process.env; 

let config = REACT_APP_ENVIRONMENT === envs.production ? prod : dev;

export { config };
