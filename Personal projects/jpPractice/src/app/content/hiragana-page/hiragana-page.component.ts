import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/character.model';
import { kanaChars } from '../../kanaChars.service';

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

  constructor(private hiraganaCharacters: kanaChars){}

  ngOnInit(){
    this.shuffledChars = this.hiraganaCharacters.shuffledHiraganaChars;
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
    console.log(this.score);
  }

}
