import { OrderService } from "./OrderService";

let orderService = new OrderService();

console.log('***中信***');
console.log(orderService.Calculate('ctbc', 1000, 'member'));
console.log('***台新***');
console.log(orderService.Calculate('taishin', 1000, 'twoYear'));
console.log('***花旗***');
console.log(orderService.Calculate('citi', 1000, ''));
