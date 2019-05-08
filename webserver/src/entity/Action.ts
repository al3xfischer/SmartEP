import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "Action"})
export class Action {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id:  number;

    @Column({name: "Action"})
    public action: string;

    @Column({name: "Stamp"})
    public stamp: Date;

    @Column({name: "UserId"})
    public userId:  number;
}