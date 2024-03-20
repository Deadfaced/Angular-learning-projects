import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/character.model';
import { kanaChars } from '../../kanaChars.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-hiragana-page',
  templateUrl: './hiragana-page.component.html',
  styleUrl: './hiragana-page.component.css',
  providers: [kanaChars]
})
export class HiraganaPageComponent implements OnInit {
  shuffledChars: Character[] = [];
  submitted: boolean = false;
  correctAnswers: number[] = [];
  totalCorrect: number;
  totalAnswers: number;
  score: string;
  approved: boolean;
  mobile = false;
  mobileLandscape = false;

  constructor(private hiraganaCharacters: kanaChars, private responsive: BreakpointObserver){}

  ngOnInit(){
    this.responsive.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ])
      .subscribe(result => {
        const breakpoints = result.breakpoints;

        this.mobile = false;
        this.mobileLandscape = false;

        if(breakpoints[Breakpoints.HandsetPortrait]){
          this.mobile = true;
        }else if(breakpoints[Breakpoints.HandsetLandscape]){
          this.mobileLandscape = true;
        }
      })

    this.shuffledChars = this.hiraganaCharacters.shuffledHiraganaChars.slice();
  }

  countCorrectAnswers(event){
    this.correctAnswers.push(event);
  }

  showScore(){
    this.submitted = true;
    this.totalCorrect = this.correctAnswers.length;
    this.totalAnswers = this.shuffledChars.length;

    this.hiraganaCharacters.scoreDisplay(this.totalCorrect, this.totalAnswers);
    this.score = this.hiraganaCharacters.score;

    if(+this.score >= 50){
      this.approved = true;
    }else{
      this.approved = true;
    }
  }
}
