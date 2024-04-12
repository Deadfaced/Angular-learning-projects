import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/character.model';
import { kanaChars } from '../../kanaChars.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-hiragana-page',
  templateUrl: './hiragana-page.component.html',
  styleUrls: ['./hiragana-page.component.css'],
  providers: [kanaChars]
})
export class HiraganaPageComponent implements OnInit {
  shuffledChars: Character[] = [];
  submitted: boolean = false;
  correctAnswers: number[] = [];
  wrongAnswers: number[] = [];
  totalWrong: number = 0;
  score: string;
  approved: boolean;
  mobile = false;
  mobileLandscape = false;
  tablet = false;
  tabletLandscape = false;

  constructor(private hiraganaCharacters: kanaChars, private responsive: BreakpointObserver){}

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
}
