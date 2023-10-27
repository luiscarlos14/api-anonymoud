import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateCoderDTO } from "../../dtos/CreateCoderDTO";

export class CreateCoderUseCase {
  async execute({ code }: CreateCoderDTO){

    const totalCoders = await prisma.coder.count();

if(totalCoders >= 1){
  throw new AppError("There is already a code!", 400);

}


      const coders  = await prisma.coder.create({
        data: {
          code,
        },
      })
      return coders ;
 
    
    
  }
}
