import { CreateCoderController } from "./../modules/coder/useCases/createCoder/CreateCoderController";
import { UpdateCodeController } from "./../modules/coder/useCases/updateCoder/UpdateCoderController";
import { GetCoderController } from "./../modules/coder/useCases/getCoder/GetCoderController";

import { Router } from "express";
import { authenticateToken } from "../utilities/authenticateToken";

const createCoderController = new CreateCoderController();
const updateCodeController = new UpdateCodeController();
const getCoderController = new GetCoderController();

const coderRoutes = Router();

coderRoutes.post("/", createCoderController.handle);
coderRoutes.put("/update", updateCodeController.handle);
coderRoutes.get("/", authenticateToken, getCoderController.handle);

export { coderRoutes };
