import { NgModule, isDevMode } from '@angular/core';
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
import { FlashcardContainerComponent } from './flashcard-container/flashcard-container.component';
import { ScoreComponent } from './score/score.component';
import { Score } from './score/score.service';
import { WrongAnswersComponent } from './wrong-answers/wrong-answers.component';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    ContentCardComponent,
    FlashcardContainerComponent,
    ScoreComponent,
    WrongAnswersComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [kanaChars, Score],
  bootstrap: [AppComponent]
})
export class AppModule { }
