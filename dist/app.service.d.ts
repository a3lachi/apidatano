export declare class AppService {
    getHome(): string;
    getUsers(): Promise<any>;
    getUser(email: string): Promise<any>;
}
