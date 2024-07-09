import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {
  //? Writable Signal to handle counter status
  public counter = signal(0);

  public onIncrement() {
    this.counter.update(value => value + 1);
  }

  public onDecrement() {
    if (this.counter() == 0) return;
    this.counter.update(value => value - 1);
  }

  public onReset() {
    this.counter.set(0);
  }
}
