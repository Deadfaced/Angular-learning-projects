import { Component } from '@angular/core';
import { Character } from '../../shared/character.model';
import { kanaChars } from '../../kanaChars.service';

@Component({
  selector: 'app-katakana-page',
  templateUrl: './katakana-page.component.html',
  styleUrl: './katakana-page.component.css',
  providers: [kanaChars]
})
export class KatakanaPageComponent {
  shuffledChars: Character[] = [];
  submitted: boolean = false;
  correctAnswers: number[] = [];
  totalCorrect: number;
  totalAnswers: number;
  score: string;

  constructor(private katakanaCharacters: kanaChars){}

  ngOnInit(){
    this.shuffledChars = this.katakanaCharacters.shuffledKatakanaChars;
  }

  countCorrectAnswers(event){
    this.correctAnswers.push(event);
  }

  showScore(){
    this.submitted = true;
    this.totalCorrect = this.correctAnswers.length;
    this.totalAnswers = this.shuffledChars.length;

    this.katakanaCharacters.scoreDisplay(this.totalCorrect, this.totalAnswers);
    this.score = this.katakanaCharacters.score;
  }
}
