import { Tag } from "./tag.model";

export class Faq {
    id : number;
    content : String;
    description : String;
    postingDate : String;
    votes : number;
    status : boolean;
    employee_id: number;
    section_id: number;
    tags: Tag[]
}
