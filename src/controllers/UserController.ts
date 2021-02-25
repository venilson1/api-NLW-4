import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UserRepository';

class UserController{

  async create(request: Request , response: Response) {
    const { name, email } = request.body;

    // acessando o banco de dados, identidade User 
    const usersRepository = getCustomRepository(UsersRepository);

    //na minha identidade user encontre um email
    const userAlreadyExistis = await usersRepository.findOne({
      email
    });
    //caso este email existir retorne um erro
    if (userAlreadyExistis) {
      return response.status(400).json({
        error: "User already exists!"
      });
      
    }
    //criando name e email no banco de dados
    const user = usersRepository.create({
      name, email
    });
    //salvando no  banco de dados
    await usersRepository.save(user)

    return response.json(user);
  }

}

export { UserController }