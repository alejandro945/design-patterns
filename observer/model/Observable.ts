import Observer from "./Observer";
import Suscriber from "./Suscriber";
// Youtube Channel
export interface Observable{
    attach(o:Observer);
    detach(o:Observer,s:Suscriber);
    notify(); //Call the update of all Observers
}