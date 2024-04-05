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

  constructor(private responsive: BreakpointObserver){}

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.mobileOption = false;

        if(result.matches){
          this.mobileOption = true;
        }
      })
  }
}
