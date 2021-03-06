import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GallerieComponent } from './gallerie/gallerie.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent, GallerieComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
