import { EventSubscriber,EntitySubscriberInterface, UpdateEvent, Repository, Entity } from "typeorm";
import { Device } from "../entity/Device";
import { Action } from "../entity/Action";
import { User } from "../entity/User";

@EventSubscriber()
export class DeviceSubscriber implements EntitySubscriberInterface<Device> {

    listenTo() {
        return Device;
    }

    public beforeUpdate(event: UpdateEvent<Device>) : void {
        let { entity, databaseEntity,updatedColumns,connection,queryRunner } = event;
        let user : User = queryRunner.data as User;
        let repository : Repository<Action> = connection.getRepository(Action);
        let columnNames : string[] = updatedColumns.map((c) => c.propertyPath);
        let updates : string = columnNames.map((n) => `${n}: '${(databaseEntity as any)[n]}' to '${(entity as any)[n]}'`).join('\n');
        let action = new Action();
        action.stamp = new Date();
        action.userId = user.id;
        action.action = updates
        repository.save(action);
    }
}