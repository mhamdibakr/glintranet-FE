export class AllUsers {
    id: number;
    civility: String;
	name: String;
	email: String;
	phone: String;
	adress: String;
	city: String;
	country: String;
	birthDate: Date
	message: String;
    constructor(id: number, civility: String, name: String, email: String, phone: String, adress: String,
        city: String, country: String, birthDate: Date, message: String){
            this.id = id;
            this.civility = civility;
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.adress = adress;
            this.city = city;
            this.country = country;
            this.birthDate = birthDate;
            this.message = message;
    }
    
}
