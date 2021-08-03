import Company from "./Company";
import Receipt from "./Receipt";

interface  ReceiptFactory{
    createReceiptFactory(company:Company): Receipt[];
}

export default ReceiptFactory;