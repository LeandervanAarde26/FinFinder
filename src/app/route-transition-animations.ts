import {
  style,
  transition,
  trigger,
  query,
  group,
  animate,
  animateChild,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }),
    ]),
    query(':enter', [style({ top: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        //   animate('300ms ease-in-out', style({ left: '-100%' }))
        style({ transform: 'translateY(0%)' }),
        animate(
          '400ms ease-in',
          style({ transform: 'translateY(100%)', opacity: 1 })
        ),
      ]),
      query(':enter', [
        //   animate('300ms  ease-in-out', style({ left: '0%' }))
        animate(
          '500ms ease-in',
          style({ transform: 'translateY(-100%)', opacity: 1 })
        ),
      ]),
    ]),
  ]),
]);
