import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { User } from './User';


@Entity({name: "Log"})
export class Log {

    public constructor(init?:Partial<Log>) {
        Object.assign(this, init);
    }
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id:  number;

    @Column({name: "Message"})
    public message: string;

    @Column({name: "Stamp"})
    public stamp: Date;

    @Column({name: "UserId"})
    public userId:  number;

    @ManyToOne(type => User, {eager: true})
    @JoinColumn({ name: "UserId" })
    public user: User;
}