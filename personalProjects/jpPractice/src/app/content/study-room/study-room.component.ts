import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/character.model';
import { kanaChars } from '../../kanaChars.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-study-room',
  templateUrl: './study-room.component.html',
  styleUrl: './study-room.component.css'
})
export class StudyRoomComponent implements OnInit{
  constructor(private jpChars: kanaChars, private responsive: BreakpointObserver, private router: Router){}

  hiraganaChars: Character[] = [];
  katakanaChars: Character[] = [];
  mobile = false;
  mobileLandscape = false;
  tablet = false;

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetPortrait, 
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ])
      .subscribe(
        result => {
          const breakpoints = result.breakpoints;

          this.mobile = false;
          this.mobileLandscape = false;
          this.tablet = false;

          if(breakpoints[Breakpoints.HandsetPortrait]){
            this.mobile = true;
          }else if(breakpoints[Breakpoints.HandsetLandscape]){
            this.mobileLandscape = true;
          }else if(breakpoints[Breakpoints.TabletPortrait]){
            this.tablet = true;
          }
        }
      )

    this.hiraganaChars = this.jpChars.hiraganaChars.slice();
    this.katakanaChars = this.jpChars.katakanaChars.slice();
  }

  scrolltoHiragana(){
    this.router.navigate([], {fragment: "hiragana"});
  }
  scrolltoKatakana(){
    this.router.navigate([], {fragment: "katakana"});
  }

}
