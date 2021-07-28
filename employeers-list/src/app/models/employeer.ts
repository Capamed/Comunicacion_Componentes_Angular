export class Employeer{
    identification:number;
    name:string;
    lastname:string;
    gender:string;
    salary:number;

    constructor(identification:number, name:string, lastname:string, gender:string, salary:number){
        this.identification = identification;
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
        this.salary = salary;
    }
}
export interface ValuesEmployeers{
    all:number,
    femaleCount:number,
    maleCount:number
}