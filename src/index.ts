import { BrickServer } from "deco-brick";
import log from "./middleware/log";
import errorHandler from "./middleware/error-handler";

class App extends BrickServer {
  start() {
    this.koa.use(log());
    this.koa.use(errorHandler());
    super.start();
  }
}
const app = new App({
  controllerPath: __dirname + "/controller",
  port: 3001,
  viewPath: __dirname + "/../view",
});
app.start();
