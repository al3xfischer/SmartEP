import { Actor } from './Actor';
import { Sensor } from './Sensor';

export class Device {
    
    public id:  number;

    public sensorId:  number;

    public actorId:  number;

    public name: string;

    public actor: Actor;

    public sensor: Sensor;
}