import { Request, Response } from "express";
import { UpdateCoderUseCase } from "./UpdateCoderUseCase";

export class UpdateCodeController {
  async handle(req: Request, res: Response) {
    const { id, code } = req.body;

    const updateCoderUseCase = new UpdateCoderUseCase();

    const result = await updateCoderUseCase.execute({ id, code });

    return res.status(201).json(result);
  }
}
