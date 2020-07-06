import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

import { PcgridComponent } from './pcStore/pcgrid/pcgrid.component';
import { PcformComponent } from './pcStore/pcform/pcform.component';
import { PcCreatorComponent } from './pcStore/pc-creator/pc-creator.component';


@NgModule({
  declarations: [
    AppComponent,
 
    PcgridComponent,
    PcformComponent,
    PcCreatorComponent,
   
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
