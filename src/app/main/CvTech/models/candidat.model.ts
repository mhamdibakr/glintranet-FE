export class Candidat {
    id: number;
    civility: String;
    name:String;
    email: String;
    phone: number;
    adress: String;
    city: String;
    country: String;
    birthDate: Date;
    message: String;
    

    constructor(
        id: number,
        civility: String,
        name:String,
        email: String,
        phone: number,
        adress: String,
        city: String,
        country: String,
        birthDate: Date,
        message: String,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.civility = civility;
        this.phone = phone;
        this.adress = adress;
        this.city = city;
        this.country = country;
        this.birthDate = birthDate;
        this.message = message;
    }
    
}
