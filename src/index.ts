import { BrickServer } from "deco-brick";
const app = new BrickServer({
  controllerPath: __dirname + "/controller",
  port: 3001,
  viewPath: __dirname + "/../view",
});
app.start();
