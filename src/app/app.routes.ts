import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'demo-signals',
    title: 'Signals Fn',
    loadComponent: () => import('./pages/demo-signals/demo-signals.component')
      .then(m => m.DemoSignalsComponent)
  },
  {
    path: '',
    redirectTo: '/demo-signals',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'demo-signals',
  }
];
