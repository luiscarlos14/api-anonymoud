import { Request, Response } from "express";
import { CreateCoderUseCase } from "./CreateCoderUseCase";

export class CreateCoderController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const createCoderUseCase = new CreateCoderUseCase();

    const result = await createCoderUseCase.execute({code});

    return res.status(201).json(result);
  }
}
