import { Trip } from "./Trip";

export default class BaseTrip implements Trip{
    // base Trip whis is not decorated Base Component
    takePrice(): number {
        return 15000;
    }
    
}