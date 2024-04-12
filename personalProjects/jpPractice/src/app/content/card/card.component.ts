import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() char: string;
  @Input() romaji: string;
  @Input() alt: string;
  @Input() inputIndex: number;
  @Output() sendAnswer = new EventEmitter<{id: number, correct: boolean}>();
  @Input() exam: boolean = true;
  mobileLandscape: boolean = false;

  correctAnswer: boolean = undefined;

  constructor(private responsive: BreakpointObserver, private route: ActivatedRoute) { }

  ngOnInit(){
    this.responsive.observe([
      Breakpoints.HandsetPortrait, 
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ])
      .subscribe(result => {
        const breakpoints = result.breakpoints;

        this.mobileLandscape = false;

        if(breakpoints[Breakpoints.HandsetLandscape]){
          this.mobileLandscape = true;
        }
      })
  }

  validation(event){
    if(event.target.value.toLowerCase() === this.romaji || event.target.value.toLowerCase() === this.alt){
      this.correctAnswer = true;
    } else{
      this.correctAnswer = false;
    }
    this.sendAnswer.emit({id: this.inputIndex, correct: this.correctAnswer});
    const nextInput: string = (++this.inputIndex).toString();
    document.getElementById(nextInput).focus();
  }

}
