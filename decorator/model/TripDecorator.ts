import { Trip } from "./Trip";

export default abstract class TripDecorator implements Trip {
    protected trip: Trip;
    
    constructor(trip: Trip) {
        this.trip = trip;
    }
    takePrice(): number {
        return this.trip.takePrice();
    }
}