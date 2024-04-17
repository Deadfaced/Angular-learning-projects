import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/character.model';
import { kanaChars } from '../../kanaChars.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-katakana-page',
  templateUrl: './katakana-page.component.html',
  styleUrls: ['./katakana-page.component.css'],
  providers: [kanaChars]
})
export class KatakanaPageComponent implements OnInit {
  shuffledChars: Character[] = [];
  submitted: boolean = false;
  correctAnswers: number[] = [];
  score: string;
  approved: boolean;
  mobile = false;
  mobileLandscape = false;
  tablet = false;
  tabletLandscape = false;

  constructor(private katakanaCharacters: kanaChars, private responsive: BreakpointObserver){}

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
