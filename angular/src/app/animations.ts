import {animate, animateChild, query, stagger, style, transition, trigger} from "@angular/animations";


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
    ])
}