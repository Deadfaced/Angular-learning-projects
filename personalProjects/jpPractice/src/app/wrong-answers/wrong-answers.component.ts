import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Score } from '../score/score.service';
import { Character } from '../shared/character.model';

@Component({
  selector: 'app-wrong-answers',
  templateUrl: './wrong-answers.component.html',
  styleUrls: ['./wrong-answers.component.css']
})
export class WrongAnswersComponent implements OnInit{
  public wrongAns = []
  
  mobile = false;
  mobileLandscape = false;
  
  constructor(private responsive: BreakpointObserver, private scoreService: Score){}

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

    this.wrongAns = this.scoreService.wrongAnswers
    console.log(this.wrongAns)
  }
}
