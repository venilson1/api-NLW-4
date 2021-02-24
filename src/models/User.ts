import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
 
@Entity("users") //informa que é uma entidade| precisa habilitar os decorators
class User{

  @PrimaryColumn() //chave primaria
  readonly id: string;

  @Column() //coluna  
  name: string;
  
  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){ //caso não exista um id na criação, o id receberá o valor de um uuid
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User }