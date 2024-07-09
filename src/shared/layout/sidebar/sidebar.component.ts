import {Component, input} from '@angular/core';
import {Route, RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";
import {routes} from "../../../app/app.routes";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLinkActive,
    NgClass,
    RouterLink
  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  public isOpen = input<boolean>();

  public menuItems: Route[] = []

  constructor() {
    this.menuItems = routes.filter(r => r && r.path && r.path !== "**");
  }
}
