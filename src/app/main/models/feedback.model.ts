import { Employee } from "./employee.model";
import { FeedbackType } from "./feedback-type.model";

export class Feedback {
    id : number;
    content : String;
    timestamp : Date
    employee : Employee;
    type : FeedbackType;
    
}
