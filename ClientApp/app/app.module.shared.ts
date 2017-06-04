import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
     
        AppComponent,
        NavMenuComponent,
        IndicatorsComponent,
        NavigationComponent,
        ButtonsComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'buttons', pathMatch: 'full' },
            { path: 'buttons', component: ButtonsComponent },
            { path: 'navigation', component: NavigationComponent },
            { path: 'indicators', component: IndicatorsComponent },
            { path: '**', redirectTo: 'buttons' }
        ])
    ]
};
