export default (format = ':method ":url"') => {
  return async (ctx: any, next: any) => {
    const str = format.replace(":method", ctx.method).replace(":url", ctx.url);
    // tslint:disable-next-line:no-console
    console.log(str);
    await next();
  };
};
