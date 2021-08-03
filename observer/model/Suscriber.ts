import Observer from "./Observer";
import YoutubeChannel from "./YoutubeChannel";

class Suscriber implements Observer {
    private name: string;
    private observable= null;

    constructor(observable: YoutubeChannel) {
        this.observable = observable;
    }

    update() {
        console.log('New Video Posted')
        console.log(this.observable.lastVideoTitle());
    }

    getName() { return this.name }
}
export default Suscriber;