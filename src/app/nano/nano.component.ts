import { Component, Input } from '@angular/core';
import { Nano } from '../Nano';

@Component({
  selector: 'app-nano',
  templateUrl: './nano.component.html',
  styleUrls: ['./nano.component.css']
})
export class NanoComponent {
  @Input() n:Nano;
}
