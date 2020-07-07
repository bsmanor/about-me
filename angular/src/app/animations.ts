import {animate, animateChild, query, stagger, style, transition, trigger, keyframes} from "@angular/animations";


export class Animations {
    public static fadeIn = trigger('fadeIn', [
        transition(':enter', [
            style({ opacity: '0', marginTop: '10px'}),
            animate('.2s ease-in', style({ opacity: '1', marginTop: '0px' })),
        ]),
    ]);
    public static stagger =  trigger('stagger', [
        transition(':enter', [
            query(':enter', stagger('.2s', [animateChild()]),{ optional: true })
        ])
    ]);
    public static stagger2 = trigger('staggering', [
        transition('* => *', [
          query(':enter', style({transform: 'translateY(-30%)'})), 
          query(':enter', stagger('50ms', [
            animate('400ms', style({transform: 'translateY(0)'}))
          ]))
        ])
    ]);
    public static stagger3 = trigger('staggering2', [
        // Transition from any state to any state
        transition('* => *', [
          // Initially the all cards are not visible
          query(':enter', style({ opacity: 0 }), { optional: true }),
  
          // Each card will appear sequentially with the delay of 300ms
          query(':enter', stagger('300ms', [
            animate('.5s ease-in', keyframes([
              style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
              style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
              style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
            ]))]), { optional: true }),
  
          // Cards will disappear sequentially with the delay of 300ms
          query(':leave', stagger('300ms', [
            animate('500ms ease-out', keyframes([
              style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
              style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
              style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
            ]))]), { optional: true })
        ])
      ])
}