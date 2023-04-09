import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHome(): string;
}
export declare class UserController {
    private readonly appService;
    constructor(appService: AppService);
    findOne(email: string): Promise<any>;
    createUser(name: string, email: string, password: string): Promise<{
        info: string;
    }>;
    deleteUser(email: string): Promise<{
        info: string;
        user?: undefined;
    } | {
        info: string;
        user: import(".prisma/client").uzer;
    }>;
}
export declare class DataController {
    private readonly appService;
    constructor(appService: AppService);
    getUserData(email: string): Promise<any>;
    postUserData(email: string, src: string, cat: string): Promise<any>;
}
