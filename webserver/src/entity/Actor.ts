import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "Actor"})
export class Actor {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id: Number;

    @Column({name: "Stamp"})
    public stamp: Date;

    @Column({name: "Value"})
    public value: String;
}