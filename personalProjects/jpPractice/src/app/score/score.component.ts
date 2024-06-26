import { Component } from '@angular/core';
import { Score } from './score.service';
import { kanaChars } from '../kanaChars.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  public submitted = false;
  public correctAnswers = [];
  public wrongAnswers = [];
  public totalAnswers: number;
  public totalCorrect: number;
  public score: string;
  public approved = false;
  mobile = false;
  mobileLandscape = false;
  tablet = false;
  tabletLandscape = false;
  charType: string;
  formType: string;
  

  constructor(private scoreService: Score, private kanaChars: kanaChars, private responsive: BreakpointObserver, private route: ActivatedRoute){}

  ngOnInit(){
    this.responsive.observe([
      Breakpoints.HandsetPortrait, 
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ])
      .subscribe(result => {
        const breakpoints = result.breakpoints;

        this.mobile = false;
        this.mobileLandscape = false;
        this.tablet = false;
        this.tabletLandscape = false;

        if(breakpoints[Breakpoints.HandsetPortrait]){
          this.mobile = true;
        }else if(breakpoints[Breakpoints.HandsetLandscape]){
          this.mobileLandscape = true;
        }else if(breakpoints[Breakpoints.TabletPortrait]){
          this.tablet = true;
        }else if(breakpoints[Breakpoints.TabletLandscape]){
          this.tabletLandscape = true;
        }
      })
  }
  

  
  showScore(){
    this.submitted = true;

    this.charType = this.route.snapshot.paramMap.get('charType');
    this.formType = this.route.snapshot.paramMap.get('formType');

    this.totalAnswers = this.charType === 'hiragana-page' ? this.kanaChars.hiraganaChars.length : this.kanaChars.katakanaChars.length;
    this.totalCorrect = this.scoreService.correctAnswers.length;

    this.score = ((this.totalCorrect / this.totalAnswers) * 100).toFixed(2);

    if(+this.score >= 50){
      this.approved = true;
    }else{
      this.approved = false;
    }
  }
}
