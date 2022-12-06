import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { NavbarBtstComponent } from './navbar-btst/navbar-btst.component';
import { TextGifComponent } from './text-gif/text-gif.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AddPostFormComponent,
    NavbarBtstComponent,
    TextGifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
