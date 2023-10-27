import { Coder } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
export class GetCoderUseCase {
  async execute(): Promise<object> {
    const coder = await prisma.coder.findMany({
      select:{
        id: true,
        code: true
      }
    });

    return coder;
  }
}
