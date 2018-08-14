import { GET, POST, Render, Validate } from "deco-brick";
import Joi from "joi";

class Controller {
  @GET("/")
  async get(ctx: any) {
    return await Promise.resolve({ message: "hello world" });
  }

  @Render("index")
  @GET("/view")
  async page(ctx: any) {
    return {  name: "pascal" };
  }

  @Validate({
    password: Joi.string().required(),
    username: Joi.string().required(),
  })
  @POST("/login")
  async login(ctx: any) {
    return await Promise.resolve({ status: "success" });
  }
}

export = Controller;
