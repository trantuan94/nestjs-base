
import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ length: 30 })
  firstname: string;

  @Column({ length: 20 })
  lastname: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 300 })
  email: string;

  @Column()
  password: string;

  @Column()
  birthdate: Date;

  @Column()
  gender: number;

  @Column()
  status: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
