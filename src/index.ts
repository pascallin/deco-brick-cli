import { BrickServer } from "deco-brick";
import log from "./middleware/log";
import errorHandler from "./middleware/error-handler";

import * as dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

class App extends BrickServer {
  start() {
    this.koa.use(log());
    this.koa.use(errorHandler());
    super.start();
  }
}
const app = new App({
  controllerPath: __dirname + "/controller",
  port: process.env.PORT ? parseInt(process.env.PORT, 0) : 3000,
  viewPath: __dirname + "/../view",
});
app.start();
