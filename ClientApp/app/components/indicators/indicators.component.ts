import { Component } from '@angular/core';


@Component({
    selector: 'indicators',
    templateUrl: './indicators.component.html',
    styleUrls:['indicators.component.css']
})
export class IndicatorsComponent {
 
 color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
 
}

