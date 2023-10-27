import { Router } from "express";
import { userRoutes } from "./user.routes";
import { coderRoutes } from "./coder.routes";


const routes = Router();

routes.use("/users", userRoutes);
routes.use("/coder", coderRoutes);

export { routes };
