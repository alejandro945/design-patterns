//Concrete Class in this case a bill made in DIAN platform. 
import Receipt from "./Receipt";

export default class Electronic implements Receipt{
    private costumer: string;

    sendEmailToCostumer(): void {
        console.log('Email sent with the follow Information:'+
        'Name:'+ this.costumer);
    }

}