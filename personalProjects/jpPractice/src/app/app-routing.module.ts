import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { HiraganaPageComponent } from "./content/hiragana-page/hiragana-page.component";
import { KatakanaPageComponent } from "./content/katakana-page/katakana-page.component";
import { StudyRoomComponent } from "./content/study-room/study-room.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FlashcardContainerComponent } from "./flashcard-container/flashcard-container.component";
import { WrongAnswersComponent } from "./wrong-answers/wrong-answers.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/main-page',
        pathMatch: 'full'
      },
      {
        path: 'main-page',
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
      },
      {
        path: ':charType/flashcards/:formType',
        component: FlashcardContainerComponent
      },
      {
        path: ':charType/flashcards/exam/revision',
        component: WrongAnswersComponent
      },

      {
        path: '**',
        component: PageNotFoundComponent
      }
];
const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
  //scrollPositionRestoration: "enabled"
};

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, routerOptions)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}