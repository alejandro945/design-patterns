import TripDecorator from "./TripDecorator";

export class PrivateDecorator extends TripDecorator{
    takePrice(): number{
        return this.trip.takePrice()*2;
    }
}