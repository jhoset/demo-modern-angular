import {Component} from '@angular/core';
import {CounterComponent} from "./components/counter/counter.component";

@Component({
  selector: 'app-demo-signals',
  standalone: true,
  imports: [
    CounterComponent
  ],
  templateUrl: './demo-signals.component.html'
})
export class DemoSignalsComponent {

}
