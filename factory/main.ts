import Company from "./model/Company";
import MacroFactory from "./model/MacroFactory";
import MicroFactory from "./model/MicroFactory";

//Method Factory is a Creation Pattern
let c1 = new Company(50, 'Altagama')
let c2 = new Company(20, 'Eka Corporación');
let c3 = new Company(5, 'Apple Inc')
let companies = [c1,c2,c3]
businessLogic(companies);

function businessLogic(company: Company[]) {
    company.forEach(c => {
        let numberOfEmpleyees = c.getEmployees();
        //If Statement
        if (numberOfEmpleyees > 45) {
             new MacroFactory();
        } else{
              new MicroFactory();
        }
    });
}
