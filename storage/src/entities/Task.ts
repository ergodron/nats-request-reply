import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ default: false })
  is_deleted: boolean;
}

