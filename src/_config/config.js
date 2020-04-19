import { envs } from "@/constants/environments";

import { config as dev } from "@/environments/dev";
import { config as prod } from "@/environments/prod";

const { NODE_ENV } = process.env; 

let config = NODE_ENV === envs.production ? prod : dev;

export { config };
