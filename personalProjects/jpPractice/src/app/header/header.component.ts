  import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navbarHidden = false;

  constructor(private responsive: BreakpointObserver){}
  
  ngOnInit() {
    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetPortrait
    ])
      .subscribe(result => {
        this.navbarHidden = false;

        if(result.matches){
          this.navbarHidden = true;
        }

      })
  }
}
