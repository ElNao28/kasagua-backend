import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parameters')
export class Parameter {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    temperatura:string;
    @Column()
    ph: string;
}
