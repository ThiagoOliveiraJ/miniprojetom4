import { v4 as uuidv4 } from "uuid";

export class Tip{
    constructor(tip,description, category){
        this.id = uuidv4();
        this.tip = tip;
        this.description = description;
        this.category = category;
    }
}