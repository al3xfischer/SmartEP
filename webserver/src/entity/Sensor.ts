import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "Sensor"})
export class Sensor {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id:  number;

    @Column({name: "Name"})
    public name: string;

    @Column({name: "Value"})
    public value: string;
}