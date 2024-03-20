import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  constructor(private responsive: BreakpointObserver){}

  isMobile = false;
  isMobileLandscape = false;
  isTablet = false;
  isTabletLandscape = false;
  isDesktop = true;
  
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

          this.isMobile = false;
          this.isMobileLandscape = false;
          this.isTablet = false;
          this.isTabletLandscape = false;

          if(breakpoints[Breakpoints.HandsetPortrait]){
            this.isMobile = true;
            this.isDesktop = false;
          }else if(breakpoints[Breakpoints.HandsetLandscape]){
            this.isMobileLandscape = true;
          }else if(breakpoints[Breakpoints.TabletPortrait]){
            this.isTablet = true;
          }else if(breakpoints[Breakpoints.TabletLandscape]){
            this.isTabletLandscape = true;
          }
        }
      )
  }
}
