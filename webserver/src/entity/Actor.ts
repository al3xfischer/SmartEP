import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "Actor"})
export class Actor {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id:  number;

    @Column({name: "Name"})
    public name: string;

    @Column({name: "Value"})
    public value: string;
}