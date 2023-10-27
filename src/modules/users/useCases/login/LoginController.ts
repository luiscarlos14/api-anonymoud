import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  async handle(req: Request, res: Response) {
    const { name, phone_number } = req.body;

      const loginUseCase = new LoginUseCase();

      const result = await loginUseCase.execute({
        name,
        phone_number,
      });

      return res.status(200).json(result);

  }
}
