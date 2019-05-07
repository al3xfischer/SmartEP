import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "Action"})
export class Action {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id: Number;

    @Column({name: "Action"})
    public action: String;

    @Column({name: "Stamp"})
    public stamp: Date;

    @Column({name: "UserId"})
    public userId: Number;
}