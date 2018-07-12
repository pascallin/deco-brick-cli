import { BrickServer } from 'deco-brick';
const app = new BrickServer({
  port: 3001,
  controllerPath: __dirname + '/controller',
  viewPath: __dirname + '/../view'
});
app.start();