export class FulWord {

    words:Word[]
    persons:Person[]
}

export class Person {
    user_id:string; 
    user_name:string; 
    password:number;
    score:number;

    constructor(obj:any=null){
        if (obj!=null) {
            Object.assign(this,obj)
        }
    }
}

export class Word {

    name:string
    HebWords:string[]
    englishWords:string[]

}
export class CureentGame {

    cureent_sum:number;
    cureent_word:string;
    cureent_sucusseful:boolean
    cureent_fail:boolean
   

}

export class Cell {
    primary:boolean;
    num;
     updated:boolean
     input:boolean

 }
