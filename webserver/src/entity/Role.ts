import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { User } from './User';

@Entity({name: "Role"})
export class Role {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id:  number;

    @Column({name: "Name"})
    public name: string;

    @OneToMany(type => User,user => user.role)
    public users: User[]
    
}