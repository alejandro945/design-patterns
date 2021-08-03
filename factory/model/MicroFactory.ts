import Paper from "./Paper";
import Pos from "./Pos";
import Receipt from "./Receipt";
import ReceiptFactory from "./ReceiptFactory";

export default class MicroFactory implements ReceiptFactory {

    createReceiptFactory(): Receipt[] {
      let receipts = []
      receipts.push(new Paper());
      receipts.push(new Pos());
      return receipts;
    }

}