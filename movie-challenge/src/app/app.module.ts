import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MocksComponent } from './mocks/mocks.component';
import { ServicesComponent } from './shared/services/services.component';
import { UtilsComponent } from './utils/utils.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MocksComponent,
    ServicesComponent,
    UtilsComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
