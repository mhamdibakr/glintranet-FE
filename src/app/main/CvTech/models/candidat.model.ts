import { Postulation } from "./postulation.model";

export class Candidat {
    id: number;
    civility: String;
    firstName: String;
    lastName: String;
    email: String;
    phone: String;
    adress: String;
    city: String;
    country: String;
    birthDate: Date;
    Message: String;
    postulation: Postulation[];

    constructor(civility: String, firstName: String, lastName: String, email: String, phone: String, adress: String, city: String, country: String, birthDate: Date, Message: String, postulation: Postulation[]) {
        this.civility = civility;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.adress = adress;
        this.city = city;
        this.country = country;
        this.birthDate = birthDate;
        this.Message = Message
        this.postulation = postulation;
    }
}
