import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Ingredient from "./Ingredient";
import Modele from "./Modele";

@Entity("composition")
export default class Composition extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Modele, (modele) => modele.compositions)
  modele: Modele;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.compositions)
  ingredient: Ingredient;

  @Column()
  weight: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
