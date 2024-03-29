import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SocialsComponent } from './socials/socials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HiraganaPageComponent } from './content/hiragana-page/hiragana-page.component';
import { KatakanaPageComponent } from './content/katakana-page/katakana-page.component';
import { StudyRoomComponent } from './content/study-room/study-room.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardComponent } from './content/card/card.component';
import { ContentCardComponent } from './content/content-card/content-card.component';
import { AppRoutingModule } from './app-routing.module';
import { kanaChars } from './kanaChars.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SocialsComponent,
    HiraganaPageComponent,
    KatakanaPageComponent,
    StudyRoomComponent,
    PageNotFoundComponent,
    CardComponent,
    ContentCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [kanaChars],
  bootstrap: [AppComponent]
})
export class AppModule { }
