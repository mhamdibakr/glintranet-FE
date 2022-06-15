export class Postulation {
    id: number;
    date_postulation: Date;
    status: String;

    campaign_id: number;
    candidat_id: number;

    constructor(
        id: number,
        date_postulation: Date,
        status: String,

        campaign_id: number,
        candidat_id: number,
        ) {
        this.id = id;
        this.date_postulation = date_postulation;
        this.status = status;
        this.campaign_id = campaign_id;
        this.candidat_id = candidat_id;
    }

}
