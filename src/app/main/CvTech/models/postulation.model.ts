import { Campaign } from "./campaign.model";
import { Candidat } from "./candidat.model";

export class Postulation {
    candidat: Candidat;
    campaign: Campaign;
    status: String;
    date_postulation: Date;

    constructor(candidat: Candidat, campaign: Campaign, status: String, date_postulation: Date) {
        this.candidat = candidat;
        this.campaign = campaign;
        this.status = status;
        this.date_postulation = date_postulation;
    }
}
