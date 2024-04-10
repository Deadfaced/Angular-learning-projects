import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit{
  @Input() rTitle: string;
  @Input() kTitle: string;
  @Input() cPath: string;
  @Input() buttText: string;
  mobileOption = false;
  mobileLandscapeOption = false;
  tabletOption = false;
  tabletLandscapeOption = false;

  constructor(private responsive: BreakpointObserver){}

  ngOnInit(): void {
    this.responsive.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
    ])
      .subscribe(
        result => {
          const breakpoints = result.breakpoints;
        
          this.mobileOption = false;
          this.mobileLandscapeOption = false;
          this.tabletOption = false;
          this.tabletLandscapeOption = false;

        if(breakpoints[Breakpoints.HandsetPortrait]){
          this.mobileOption = true;
        }else if(breakpoints[Breakpoints.HandsetLandscape]){
          this.mobileLandscapeOption = true;
        }else if(breakpoints[Breakpoints.TabletPortrait]){
          this.tabletOption = true;
        }else if(breakpoints[Breakpoints.TabletPortrait]){
          this.tabletLandscapeOption = true;
        }
      })
  }
}
