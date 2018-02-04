import { RandomPrint } from "./RandomPrint";
import { DocumentTxt } from "./DocumentTxt";

let printDoc = new RandomPrint(new DocumentTxt());

printDoc.open('myfile.txt');
printDoc.display(); // 隨機列印
printDoc.close();