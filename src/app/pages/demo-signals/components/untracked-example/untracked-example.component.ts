import {Component, effect, signal, untracked} from '@angular/core';

@Component({
  selector: 'app-untracked-example',
  standalone: true,
  imports: [],
  templateUrl: './untracked-example.component.html',
  styles: ``
})
export class UntrackedExampleComponent {

  public A = signal(0);
  public B = signal(0);

  constructor() {
    effect(() => {
      console.log('Effect fired!!');
      console.log('Sum', this.A() + untracked(this.B));
      //? Other Syntax
      //console.log('Sum', this.A() + untracked(() => this.B()));
    });
  }

  onUpdateA() {
    this.A.set(Date.now());
  }

  onUpdateB() {
    this.B.set(Date.now());
  }
}
