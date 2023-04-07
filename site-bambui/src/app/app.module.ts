import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { SobreComponent } from './shared/pages/sobre/sobre.component';
import { MenuComponent } from './shared/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
