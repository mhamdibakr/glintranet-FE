<<<<<<< HEAD
export class CompanyEntity {
=======
import { EntityDepartment } from "./entity-department.model";


export class CompanyEntity {

    id:number;
    name:string;
    timestamp:string;
    departements:Array<EntityDepartment>=[];
    company_id:number;
    
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
}
