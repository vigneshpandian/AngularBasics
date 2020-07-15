import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

import { PcgridComponent } from './pcStore/pcgrid/pcgrid.component';
import { PcformComponent } from './pcStore/pcform/pcform.component';
import { PcCreatorComponent } from './pcStore/pc-creator/pc-creator.component';
import { PcHeaderComponent } from './pc-header/pc-header.component';
import { FooterComponent } from './footer/footer.component';
import { AppHighlightDirective } from './directives/app-highlight.directive';
import { PcInventoryComponent } from './pc-inventory/pc-inventory.component';
import { SetAltTextForImageDirective } from './directives/set-alt-text-for-image.directive';


@NgModule({
  declarations: [
    AppComponent,
 
    PcgridComponent,
    PcformComponent,
    PcCreatorComponent,
    PcHeaderComponent,
    FooterComponent,
    AppHighlightDirective,
    PcInventoryComponent,
    SetAltTextForImageDirective,
   
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
