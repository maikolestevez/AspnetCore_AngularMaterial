import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

import { sharedConfig } from './app.module.shared';




@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
     
        BrowserAnimationsModule,
           MaterialModule,
           MdButtonModule,
           MdIconModule,
              ...sharedConfig.imports
    ],

    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin }
    ]
})
export class AppModule {
}
