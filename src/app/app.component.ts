import {Component, signal, WritableSignal} from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {TopNavComponent} from "../shared/layout/top-nav/top-nav.component";
import {SidebarComponent} from "../shared/layout/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, TopNavComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isSidebarOpen: WritableSignal<boolean> = signal<boolean>(false);

  public handleToggleSidebar() {
    this.isSidebarOpen.update(value => !value);
  }


}
