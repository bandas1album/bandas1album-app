import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const zoomInTransition: any = trigger('routeAnimation', [
  transition('Home => Album', [
    query(
      ':enter',
      style({
        position: 'fixed',
        top: 0,
        left: 0,
      })
    ),
    group([
      query(
        ':enter',
        [
          style({
            transform: 'scale(2)',
          }),
          animate('0.5s ease-in-out', style({ transform: 'scale(1)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({
            transform: 'scale(1)',
          }),
          animate('0.5s ease-in-out', style({ transform: 'scale(2)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
