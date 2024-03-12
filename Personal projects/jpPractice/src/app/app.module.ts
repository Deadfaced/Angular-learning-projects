import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SocialsComponent } from './socials/socials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HiraganaPageComponent } from './content/hiragana-page/hiragana-page.component';
import { KatakanaPageComponent } from './content/katakana-page/katakana-page.component';
import { StudyRoomComponent } from './content/study-room/study-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SocialsComponent,
    HiraganaPageComponent,
    KatakanaPageComponent,
    StudyRoomComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'hiragana-page',
        component: HiraganaPageComponent
      },
      {
        path: 'katakana-page',
        component: KatakanaPageComponent
      },
      {
        path: 'study-room',
        component: StudyRoomComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
