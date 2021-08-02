import { Observable } from "./Observable";
import Observer from "./Observer";
import Suscriber from "./Suscriber";

class YoutubeChannel implements Observable {
    private channelSuscribers = [];
    private lastVideoPosted: string;

    lastVideoTitle() {
        return this.lastVideoPosted;
    }

    addNewVideo(title: string) {
        this.lastVideoPosted = title;
        this.notify();
        console.log('New video added to channel');
    }
    
    attach(o: Observer) {
        this.channelSuscribers.push(o)
    }

    detach(o: Observer, s: Suscriber) {
        this.channelSuscribers.forEach(suscriber => {
            if (s.getName() == suscriber.name) {
                this.channelSuscribers.filter(suscriber)
            }
        });
    }

    notify() {
        for (let suscriptor of this.channelSuscribers) {
            suscriptor.update();
        }
    }
}
export default YoutubeChannel;