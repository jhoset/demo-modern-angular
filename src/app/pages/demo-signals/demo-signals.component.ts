import {Component} from '@angular/core';
import {CounterComponent} from "./components/counter/counter.component";
import {ImcCalculatorComponent} from "./components/imc-calculator/imc-calculator.component";

@Component({
  selector: 'app-demo-signals',
  standalone: true,
  imports: [
    CounterComponent,
    ImcCalculatorComponent
  ],
  templateUrl: './demo-signals.component.html'
})
export class DemoSignalsComponent {

}
