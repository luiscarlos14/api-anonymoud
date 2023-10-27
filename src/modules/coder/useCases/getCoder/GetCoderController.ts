import { Request, Response } from "express";
import { GetCoderUseCase } from "./GetCoderUseCase";

export class GetCoderController {
    async handle(req: Request, res: Response) {

        const getCoderUseCase = new GetCoderUseCase();

        const result = await getCoderUseCase.execute();

        return res.status(201).json(result);
    }
}