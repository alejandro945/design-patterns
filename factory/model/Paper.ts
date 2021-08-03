//Concrete Class in this case a normal bill
import Receipt from "./Receipt";

export default class Paper implements Receipt {
    private totalToPay: number

    sendEmailToCostumer(): void {
        console.log('Total to Pay: $' +
            this.totalToPay)
    }

}