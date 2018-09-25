import { Component } from '@angular/core';
import {SliderModule} from 'primeng/slider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  val: number;
}
