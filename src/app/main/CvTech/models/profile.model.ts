import { Availability } from "./availability.model";
import { Campaign } from "./campaign.model";
import { Candidat } from "./candidat.model";
import { CurrentSituation } from "./current-situation.model";
import { Education } from "./education.model";
import { Function } from "./function.model";
import { GlobalExperience } from "./global-experience.model";
import { Skills } from "./skills.model";

export class Profile {
    name: String;
    candidat: Candidat;
    educations: Education[];
    situations: CurrentSituation[];
    functions: Function[];
    experiences: GlobalExperience[];
    availablities: Availability[];
    skills: Skills[];
    campaigns: Campaign[];

    constructor(name: String, candidat: Candidat, educations: Education[], situations: CurrentSituation[], functions: Function[],
        experiences: GlobalExperience[], availablities: Availability[], skills: Skills[], campaigns: Campaign[]) {
        this.name = name;
        this.candidat = candidat;
        this.educations = educations;
        this.situations = situations;
        this.functions = functions;
        this.experiences = experiences;
        this.availablities = availablities;
        this.skills = skills;
        this.campaigns = campaigns;
    }
}

/*
    private String name;
    private Candidat candidat;
    private Set<Education> educations;
    private Set<CurrentSituation> situations;
    private Set<Function> functions;
    private Set<GlobalExperience> experiences;
    private Set<Availablity> availablities;
    private Set<Skills> skills;
    private Set<Campaign> campaigns;
     */
