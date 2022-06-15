import { Candidat } from "./candidat.model";

export class PostulationResponse {
    id: number;
    date_postulation: Date;
    status: String;

    candidat: Candidat;
}
