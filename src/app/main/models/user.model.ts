export class User {
    firstName: String;
    lastName:String;
    CIN: String;
    username: number;
    email: String;
    password: String;
    phoneNumber: String;
    birthDate: String
    roles: [
        {
            id: number,
            name: String,
            description: String
        }
    ];
}
