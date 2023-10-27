import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { LoginDTO } from "../../dtos/LoginDTO";

import { generateToken } from "../../../../utilities/jwtUtils";

export class LoginUseCase {
  async execute({ name, phone_number }: LoginDTO): Promise<object> {
    const user = await prisma.user.findUnique({
      where: {
        phone_number,
      },
    });

    if (!user) {
      throw new AppError("User not exists", 400);
    }

    if (user) {
      const nameVerify = await prisma.user.findFirst({
        where: {
          name: name,
        },
      });

      if (!nameVerify) {
        throw new AppError("not authorized", 401);
      }
    }

    const constructorToken = {
      userId: user.id,
      phone_number: user.phone_number,
    };

    const token = generateToken(constructorToken);

    const result = {
      userId: user.id,
      name: user.name,
      phone_number: user.phone_number,
      token: token,
    };

    return result;
  }
}
