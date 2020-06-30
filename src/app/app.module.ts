import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { PcConfigurationComponent } from './pc-configuration/pc-configuration.component';
import { PcConfigurationFormComponent } from './pc-configuration/pc-form/pc-form.component';
import { PcConfigurationGridComponent } from './pc-Configuration/pc-grid/pc-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PcConfigurationComponent,
     PcConfigurationFormComponent,
     PcConfigurationGridComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
