import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RouteAnimation } from './core/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouteAnimation],
})
export class AppComponent {
  isHome = false;

  pageTitle = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        this.isHome = url === '/';
        this.pageTitle = this.isHome ? '' : url ? url.charAt(1).toUpperCase() + url.slice(2) : 'Not Found';
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
