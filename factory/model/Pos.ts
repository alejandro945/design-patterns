//Concrete Class in this case a bill made by a specialized Software
import Receipt from "./Receipt";

export default class Pos implements Receipt {

    private iva: number;

    sendEmailToCostumer(): void {
        console.log('Iva Price:' + this.iva)
    }

}