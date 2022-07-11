import adminSuccess from './admin-success'
export default function () {
  this.nuxt.hook("render:setupMiddleware", (app) => {
    app.use("/admin/success", adminSuccess(app));
  });  
}