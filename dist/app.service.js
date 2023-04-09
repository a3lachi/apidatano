"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let AppService = class AppService {
    getHome() {
        return 'Home';
    }
    async getUsers() {
        const Users = await prisma.uzer.findMany();
        console.log(Users);
        return Users;
    }
    async getUser(email) {
        const user = await prisma.uzer.findMany({
            where: {
                email: email,
            }
        });
        if ((user === null || user === void 0 ? void 0 : user.length) === 1)
            return user;
        else
            return { "email": "don't exist" };
    }
    async createUser(email, name, password) {
        const exist = await this.getUser(email);
        if ((exist === null || exist === void 0 ? void 0 : exist.email) === "don't exist") {
            const user = await prisma.uzer.create({
                data: {
                    email: email,
                    name: name,
                }
            });
            return { "info": "added a new user" };
        }
        else
            return { "info": "email already exist" };
    }
    async deleteUser(email) {
        const exist = await this.getUser(email);
        if ((exist === null || exist === void 0 ? void 0 : exist.email) === "don't exist") {
            return { "info": "email don't exist" };
        }
        else {
            const user = await prisma.uzer.delete({
                where: {
                    email: email,
                }
            });
            return { "info": "deleted", "user": user };
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map