<<<<<<< HEAD
export class EntityDepartment {
=======
import { CompanyEntity } from "./company-entity.model";

export class EntityDepartment {
    id:number;
    name:string;
    timestamp:string;
    entity:CompanyEntity;
    entity_id:number;
    
    constructor (name:string){
        this.name=name;
    }
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
}
