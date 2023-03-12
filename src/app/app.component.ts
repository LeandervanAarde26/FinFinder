import { Component } from '@angular/core';
import { ChildrenOutletContexts, Route, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'FinFinder';

  // prepareRoute(outlet: RouterOutlet){
  //   return outlet && 
  //   outlet.activatedRouteData &&
  //   outlet.activatedRouteData['animationState']
  // }

  constructor(private contexts: ChildrenOutletContexts){}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
