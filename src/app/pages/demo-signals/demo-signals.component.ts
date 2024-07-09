import {Component} from '@angular/core';
import {CounterComponent} from "./components/counter/counter.component";
import {ImcCalculatorComponent} from "./components/imc-calculator/imc-calculator.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";

@Component({
  selector: 'app-demo-signals',
  standalone: true,
  imports: [
    CounterComponent,
    ImcCalculatorComponent,
    TodoListComponent
  ],
  templateUrl: './demo-signals.component.html'
})
export class DemoSignalsComponent {

}
