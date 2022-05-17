import { Profile } from "./profile.model";

export class Campaign {
    id:number;
    name: String;
    description: String;
    nbPositions: number;
    closing_date: Date;
    profil: Profile;

    constructor(name: String,description: String,nbPositions: number,closing_date: Date,profil: Profile) {
        this.name = name;
        this.description = description;
        this.nbPositions = nbPositions;
        this.closing_date = closing_date;
        this.profil = profil;
    }
}
