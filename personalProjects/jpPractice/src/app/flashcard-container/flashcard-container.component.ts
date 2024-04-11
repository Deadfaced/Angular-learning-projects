import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { kanaChars } from '../kanaChars.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../shared/character.model';
import { CardComponent } from '../content/card/card.component';

@Component({
  selector: 'app-flashcard-container',
  templateUrl: './flashcard-container.component.html',
  styleUrls: ['./flashcard-container.component.css']
})
export class FlashcardContainerComponent implements OnInit{
  shuffledChars: Character[] = [];
  isExam = false;
  correctAnswers: number[] = [];
  wrongAnswers: number[] = [];
  totalCorrect: number = 0;
  totalWrong: number = 0;

  mobile = false;
  mobileLandscape = false;

  constructor(private responsive: BreakpointObserver, private kanaChars: kanaChars, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.responsive.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ])
      .subscribe(
        result => {
          const breakpoints = result.breakpoints;

          this.mobile = false;
          this.mobileLandscape = false;

          if(breakpoints[Breakpoints.HandsetPortrait]){
            this.mobile = true;
          }else if(breakpoints[Breakpoints.HandsetLandscape]){
            this.mobileLandscape = true;
          }
        }
      )

      let char = this.route.snapshot.paramMap.get('charType');
      let form = this.route.snapshot.paramMap.get('formType');
      
      if(char === 'hiragana-page'){
        this.shuffledChars = this.kanaChars.shuffle(this.kanaChars.hiraganaChars.slice());
      }else if(char === 'katakana-page'){
        this.shuffledChars = this.kanaChars.shuffle(this.kanaChars.katakanaChars.slice());
      }

      if(form === 'exam'){
        this.isExam = true;
      }else if(form === 'practice'){
        this.isExam = false;
      }
  }

  countCorrectAnswers(event){
    if(event.correct){
      this.correctAnswers.push(event.id);
      this.totalCorrect++;
    }
    else{
      this.wrongAnswers.push(event.id);
      this.totalWrong++;
    }
  }

  ngOnDestroy(){
    this.isExam = false;
  }
}
