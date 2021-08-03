
export default class Company{
    private employees: number;
    private businessName: string;

    constructor(employees:number,businessName:string){
        this.employees=employees;
        this.businessName=businessName;
    }

    getEmployees(){
        return this.employees;
    }

    getBusinessName(){
        return this.businessName;
    }
}