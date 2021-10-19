import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Composition from "./Composition";
import Procede from "./Procede";

@Entity("modele")
export default class Modele extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column()
  description: string;

  @Column()
  puht: number;

  @Column({
    length: 50,
  })
  gamme: string;

  @OneToOne(() => Procede)
  @JoinColumn()
  procede: Procede;

  @OneToMany(() => Composition, (composition) => composition.modele)
  compositions: Composition[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
