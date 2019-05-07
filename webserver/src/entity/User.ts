import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: "User"})
export class User {

    @PrimaryGeneratedColumn({name: "Id"})
    public id:Number;

    @Column({name: "Name"})
    public name:String;

    @Column({name: "Keyword"})
    public keyword:String;

    @Column({name: "RoleId"})
    public roleId: number;

    @Column({name: "Uui"})
    public uuid:String;
}