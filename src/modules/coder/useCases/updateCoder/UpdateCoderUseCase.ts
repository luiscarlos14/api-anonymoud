import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateCoderDTO } from "../../dtos/UpdateCoderDTO";

export class UpdateCoderUseCase {
  async execute({ id, code }: UpdateCoderDTO): Promise<object> {
    const codeAlreadyExists = await prisma.coder.findFirst({
      where: {
        id,
      },
    });

    if (!codeAlreadyExists) {
      throw new AppError("code not exists!", 400);
    }

    const coder = await prisma.coder.update({
      where: {
        id: id,
      },
      data: {
        code: code,
      },
    });

    return coder;
  }
}
