import { TrafficLightContext } from "./TrafficLightContext";
import { RedLight } from "./RedLight";
import { GreenLight } from "./GreenLight";
import { YellowLight } from "./YellowLight";


let redLight = new TrafficLightContext(RedLight);

console.log('紅燈 >> 綠燈 >> 黃燈 >> 紅燈');
console.log(redLight.request());
console.log(redLight.request());
console.log(redLight.request());

let greenLight = new TrafficLightContext(GreenLight);

console.log('綠燈 >> 黃燈 >> 紅燈 >> 綠燈');
console.log(greenLight.request());
console.log(greenLight.request());
console.log(greenLight.request());

let yellowLight = new TrafficLightContext(YellowLight);

console.log('黃燈 >> 紅燈 >> 綠燈 >> 黃燈');
console.log(yellowLight.request());
console.log(yellowLight.request());
console.log(yellowLight.request());