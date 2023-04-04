import { Component } from '@angular/core';
import { Nano } from './Nano';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nani:Nano[] = [
    new Nano("Brontolo", 1),
    new Nano("Gongolo", 2),
    new Nano("Dotto", 3),
    new Nano("Cucciolo", 4),
    new Nano("Eolo", 5),
    new Nano("Pisolo", 6),
    new Nano("Mammolo", 7)
  ];

  stringInterpolation:string = "ciao";
  propertyBinding:string = "corsivo";
  twoWayBinding:string = "";
}