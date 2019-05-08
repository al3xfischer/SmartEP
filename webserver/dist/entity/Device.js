"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Actor_1 = require("./Actor");
const Sensor_1 = require("./Sensor");
let Device = class Device {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: "Id" }),
    __metadata("design:type", Number)
], Device.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: "Sensorid" }),
    __metadata("design:type", Number)
], Device.prototype, "sensorId", void 0);
__decorate([
    typeorm_1.Column({ name: "ActorId" }),
    __metadata("design:type", Number)
], Device.prototype, "actorId", void 0);
__decorate([
    typeorm_1.Column({ name: "Name" }),
    __metadata("design:type", String)
], Device.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Actor_1.Actor, { eager: true }),
    typeorm_1.JoinColumn({ name: "Id" }),
    __metadata("design:type", Actor_1.Actor)
], Device.prototype, "actor", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Sensor_1.Sensor, { eager: true }),
    typeorm_1.JoinColumn({ name: "Id" }),
    __metadata("design:type", Sensor_1.Sensor)
], Device.prototype, "sensor", void 0);
Device = __decorate([
    typeorm_1.Entity({ name: "Device" })
], Device);
exports.Device = Device;
//# sourceMappingURL=Device.js.map