import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "Device"})
export class Device {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id: Number;

    @Column({name: "Sensorid"})
    public sensorId: Number;

    @Column({name: "ActorId"})
    public actorId: Number;

    @Column({name: "Name"})
    public name: String;
}