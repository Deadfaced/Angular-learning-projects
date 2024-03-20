import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navbarHidden = false;
  tabletLandscape = false;

  constructor(private responsive: BreakpointObserver){}
  
  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ])
      .subscribe(result => {
        const breakpoints = result.breakpoints;

        this.navbarHidden = false;
        this.tabletLandscape = false;

        if(breakpoints[Breakpoints.HandsetPortrait]){
          this.navbarHidden = true;
        }else if(breakpoints[Breakpoints.HandsetLandscape]){
          this.navbarHidden = true;
        }else if(breakpoints[Breakpoints.TabletLandscape]){
          this.tabletLandscape = true;
        }else if(breakpoints[Breakpoints.TabletPortrait]){
          this.tabletLandscape = true;
        }

      })
  }
}
