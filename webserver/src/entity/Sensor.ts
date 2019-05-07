import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "Sensor"})
export class Sensor {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id: Number;

    @Column({name: "Name"})
    public name: String;

    @Column({name: "Value"})
    public value: Date;
}