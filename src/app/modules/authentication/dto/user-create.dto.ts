export class UserCreateDto {   
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;

    constructor() {
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
    }
}