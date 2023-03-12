import { Component } from '@angular/core';
import { ChildrenOutletContexts, Route, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from 'src/app/route-transition-animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routeTransitionAnimations]
})
export class DashboardComponent {

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
