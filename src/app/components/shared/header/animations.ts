import { trigger,state,style,animate,transition,query,animateChild,group } from '@angular/animations';


export const slider =
  trigger('routeAnimations', [
    transition('* => NosotrosView', slideTo('left') ),
    transition('NosotrosView => *', slideTo('left') )
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':leave', [
      style({
        position: 'absolute',
        [direction]: 0,
        width: '100%',
        transform: 'scale(1)',
        opacity: 1,
      })
    ], optional),
    query(':enter', [
      style({ 
        position: 'absolute',
        [direction]: '100%',
        width: '0%',
        transform: 'scale(0)',
        opacity: 0,

      })
    ]),
    group([
      query(':leave', [
        animate('500ms ease', style({ [direction]: '100%',transform:'scale(0)', width:'0%', opacity: 0}))
      ], optional),
      query(':enter', [
        animate('500ms ease', style({ [direction]: '0% ',transform: 'scale(1)', width: '100%',opacity: 1}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}


export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),
]);