import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { Role } from './Role';

@Entity({name: "User"})
export class User {

    @PrimaryGeneratedColumn({name: "Id"})
    public id: number;

    @Column({name: "Name"})
    public name:string;

    @Column({name: "Keyword"})
    public keyword:string;

    @Column({name: "Salt"})
    public salt: string;

    @Column({name: "RoleId"})
    public roleId:  number;

    @Column({name: "Uuid"})
    public uuid:string;

    @ManyToOne(type => Role,{eager: true})
    @JoinColumn({ name: "RoleId" })
    public role: Role;
}