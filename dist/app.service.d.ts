export declare class AppService {
    getHome(): string;
    getUsers(): Promise<Object>;
    getUser(email: string): Promise<any>;
    createUser(email: string, name: string, password: string): Promise<{
        info: string;
    }>;
    deleteUser(email: string): Promise<{
        info: string;
        user?: undefined;
    } | {
        info: string;
        user: import(".prisma/client").uzer;
    }>;
    getUserData(email: string): Promise<any>;
    postUserData(email: string, cat: string, src: string): Promise<any>;
}
