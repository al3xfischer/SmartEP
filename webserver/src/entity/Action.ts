import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { User } from './User';


@Entity({name: "Action"})
export class Action {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id:  number;

    @Column({name: "Action"},)
    public action: string;

    @Column({name: "Stamp"})
    public stamp: Date;

    @Column({name: "UserId", nullable: true, default: null})
    public userId:  number;

    @ManyToOne(type => User, {eager: true})
    @JoinColumn({name: "UserId"})
    public user: User;
}