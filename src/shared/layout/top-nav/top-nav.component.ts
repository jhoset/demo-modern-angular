import {Component, output} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent {
  public toggleSidebar = output();

  public onToggleSidebar() {
    this.toggleSidebar.emit()
  }
}
