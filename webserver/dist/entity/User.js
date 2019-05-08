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
const Role_1 = require("./Role");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: "Id" }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: "Name" }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: "Keyword" }),
    __metadata("design:type", String)
], User.prototype, "keyword", void 0);
__decorate([
    typeorm_1.Column({ name: "Salt" }),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    typeorm_1.Column({ name: "RoleId" }),
    __metadata("design:type", Number)
], User.prototype, "roleId", void 0);
__decorate([
    typeorm_1.Column({ name: "Uuid" }),
    __metadata("design:type", String)
], User.prototype, "uuid", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Role_1.Role, { eager: true }),
    typeorm_1.JoinColumn({ name: "Id" }),
    __metadata("design:type", Role_1.Role)
], User.prototype, "role", void 0);
User = __decorate([
    typeorm_1.Entity({ name: "User" })
], User);
exports.User = User;
//# sourceMappingURL=User.js.map