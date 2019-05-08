import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


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
}