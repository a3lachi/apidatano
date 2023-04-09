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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHome() {
        return this.appService.getHome();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiTags)('Datano'),
    (0, swagger_1.ApiOperation)({ summary: 'Check if Server and DB are up' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHome", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
let UserController = class UserController {
    constructor(appService) {
        this.appService = appService;
    }
    findOne(email) {
        return this.appService.getUser(email);
    }
    createUser(name, email, password) {
        return this.appService.createUser(email, name, "pwd");
    }
    deleteUser(email) {
        return this.appService.deleteUser(email);
    }
};
__decorate([
    (0, common_1.Get)(':email'),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiOperation)({ summary: 'Check if user exist by email' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'User infos',
        type: Object,
    }),
    (0, swagger_1.ApiProperty)({ example: 'username12345' }),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a new user' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
            },
            example: {
                email: "jeannebaptise@live.fr",
                name: "Jean Baptiste",
                password: "Azerty2023",
            }
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'User creation status',
        type: Object,
    }),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a user' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                email: { type: 'string' },
            },
            example: {
                email: "jeannebaptise@live.fr",
            }
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'User delete status',
        type: Object,
    }),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('/user'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=app.controller.js.map