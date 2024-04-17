import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScoreComponent } from '../../score/score.component';
import { Score } from '../../score/score.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() char: string;
  @Input() romaji: string;
  @Input() alt: string;
  @Input() inputIndex: number;
  @Output() sendAnswer = new EventEmitter<{id: number, correct: boolean}>();
  @Input() exam: boolean = true;
  mobileLandscape: boolean = false;

  correctAnswer: boolean = undefined;

  constructor(private responsive: BreakpointObserver, private score: Score) { }

  ngOnInit(){
    this.responsive.observe([
      Breakpoints.HandsetPortrait, 
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ])
      .subscribe(result => {
        const breakpoints = result.breakpoints;

        this.mobileLandscape = false;

        if(breakpoints[Breakpoints.HandsetLandscape]){
          this.mobileLandscape = true;
        }
      })
  }

  validation(event){
    if(event.target.value.toLowerCase() === this.romaji || event.target.value.toLowerCase() === this.alt){
      this.correctAnswer = true;
      this.score.onCorrectAnswer(this.char)
    } else{
      this.correctAnswer = false;
      this.score.onWrongAnswer(this.char, this.romaji, this.alt)
    }
    this.sendAnswer.emit({id: this.inputIndex, correct: this.correctAnswer});
    const nextInput: string = (++this.inputIndex).toString();
    document.getElementById(nextInput).focus();
  }

}
