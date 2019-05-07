import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "Log"})
export class Log {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id: Number;

    @Column({name: "Message"})
    public message: String;

    @Column({name: "Stamp"})
    public stamp: Date;

    @Column({name: "UserId"})
    public userId: Number;
}