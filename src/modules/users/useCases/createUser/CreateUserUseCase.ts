import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

import { generateToken } from "../../../../utilities/jwtUtils";

export class CreateUserUseCase {
  async execute({ name, phone_number }: CreateUserDTO): Promise<object> {

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        phone_number,
      },
    });


    if (userAlreadyExists) {
      throw new AppError("User already exists!", 400);
    }

    const user = await prisma.user.create({
      data: {
        name,
        phone_number
      },
    });

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
