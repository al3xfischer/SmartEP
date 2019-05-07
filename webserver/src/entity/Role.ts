import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: "Role"})
export class Role {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id: Number;

    @Column({name: "Name"})
    public name: String;
    
}