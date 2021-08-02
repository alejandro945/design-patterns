import TripDecorator from "./TripDecorator";

export class LunchDecorator extends TripDecorator{
    takePrice(): number{
        return this.trip.takePrice()+10000;
    }
}