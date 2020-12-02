import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './blocks/root/app.component';
import { BlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
