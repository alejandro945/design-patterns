import BaseTrip from "./model/BaseTrip";
import { LunchDecorator } from "./model/LunchDecorator";
import { PrivateDecorator } from "./model/PrivateDecorator";

let trip = new BaseTrip();
let price = trip.takePrice()
console.log(price) //15000
//Addind layers and changing their behavior en execution time.
let privateTrip = new PrivateDecorator(trip);
let privateAndLunchTrip = new LunchDecorator(privateTrip);
let price1 = privateTrip.takePrice()
let price2 = privateAndLunchTrip.takePrice()
console.log(price1) //30000
console.log(price2) //40000

