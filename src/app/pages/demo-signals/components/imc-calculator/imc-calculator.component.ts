import {Component, computed, signal} from '@angular/core';
import {DecimalPipe, NgClass} from "@angular/common";

type ImcCategory = 'Underweight' | 'Normal' | 'Overweight' | 'Obesity' | 'N/A';

@Component({
  selector: 'app-imc-calculator',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass
  ],
  templateUrl: './imc-calculator.component.html',
  styles: ``
})
export class ImcCalculatorComponent {
  //? Writable Signals to handle weight and height
  public weight = signal(0);
  public height = signal(0);

  //? Computed Signal to calculate IMC
  imc = computed(() => {
    const weight = this.weight();
    const height = this.height();

    if (weight <= 0 || height <= 0) return 0;

    return weight / height ** 2;

  })

  //? Computed Signal to get IMC Category
  imcCategory = computed<ImcCategory>(() => {
    const imc = this.imc();

    if (!imc) return 'N/A';

    if (imc < 18.5) {
      return 'Underweight';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  })


  public onHeightInput(event: any) {
    this.height.set(Number(event.target.value));
  }

  public onWeightInput(event: any) {
    this.weight.set(Number(event.target.value));
  }

}
