import Suscriber from "./model/Suscriber";
import YoutubeChannel from "./model/YoutubeChannel";

let channel = new YoutubeChannel();

let s1 = new Suscriber(channel);
let s2 = new Suscriber(channel);

channel.attach(s1);
channel.attach(s2);

channel.addNewVideo('Rendering Props')
//Print n times => Default Message <= depending of the number os suscriber in channel