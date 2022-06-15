import { Availability } from "./availability";
import { CurrentSituation } from "./current-situation";
import { Education } from "./education";
import { GlobalExperience } from "./global-experience";
import { Postulation } from "./postulation.model";
import { Skill } from "./skill";

export class AllCampaign {
    name: String;
    description: String;
    nbPositions: number;
    closing_date: String;
   
    availablities: Availability;
    experiences: GlobalExperience;
    educations: Education;
    situations: CurrentSituation;
    functions: Function;
    skills: Skill;
    postulation : Postulation;

    constructor(
            name: String, 
            description: String, 
            nbPositions: number, 
            closing_date: String, 
            availablities: Availability, 
            educations: Education,
            situations: CurrentSituation,
            functions: Function,
            skills: Skill,
            experiences: GlobalExperience,
            postulation : Postulation
        ) {
        this.name = name;
        this.description = description;
        this.nbPositions = nbPositions;
        this.closing_date = closing_date;
        this.availablities = availablities;
        this.educations = educations;
        this.situations = situations;
        this.functions = functions;
        this.skills = skills;
        this.experiences = experiences;
        this.postulation = postulation;
    }
    
}
