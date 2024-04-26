import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MocksComponent } from './mocks/mocks.component';
import { ServicesComponent } from './shared/services/services.component';
import { UtilsComponent } from './utils/utils.component';
import { ModelsComponent } from './models/models.component';
import { Movie } from './src/models/movie.d.ts/movie.d.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MocksComponent,
    ServicesComponent,
    UtilsComponent,
    ModelsComponent,
    Movie.D.TsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
