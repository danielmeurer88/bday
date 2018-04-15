
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const SLIDING_MAPS_ANI = [

    trigger('slidingMaps', [
        state('closed', style({
          height: '0px'
        })),

        state('opened', style({
          height: '450px'
        })),
        transition('* => *', animate('500ms ease-in')),
      ])

];
