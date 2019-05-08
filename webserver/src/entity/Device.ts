import {Entity, Column, PrimaryGeneratedColumn,JoinColumn, ManyToOne} from 'typeorm';
import { Actor } from './Actor';
import { Sensor } from './Sensor';


@Entity({name: "Device"})
export class Device {
    
    @PrimaryGeneratedColumn({name: "Id"})
    public id:  number;

    @Column({name: "Sensorid"})
    public sensorId:  number;

    @Column({name: "ActorId"})
    public actorId:  number;

    @Column({name: "Name"})
    public name: string;

    @ManyToOne(type => Actor, {eager: true})
    @JoinColumn({ name: "ActorId" })
    public actor: Actor;

    @ManyToOne(type => Sensor, {eager: true})
    @JoinColumn({name: "SensorId"})
    public sensor: Sensor;
}