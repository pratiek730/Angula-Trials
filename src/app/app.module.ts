import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { NavbarBtstComponent } from './navbar-btst/navbar-btst.component';
import { TextGifComponent } from './text-gif/text-gif.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AddPostFormComponent,
    NavbarBtstComponent,
    TextGifComponent,
    CustomHeaderComponent,
    FlipCardsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
