import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() char: string;
  @Input() romaji: string;
  @Input() alt: string;
  @Input() inputIndex: number;
  @Output() sendAnswer = new EventEmitter<number>();

  correctAnswer: boolean = undefined;

  validation(event){
    if(event.target.value.toLowerCase() === this.romaji || event.target.value.toLowerCase() === this.alt){
      this.correctAnswer = true;
      this.sendAnswer.emit(this.inputIndex);
      const nextInput: string = (++this.inputIndex).toString();
      document.getElementById(nextInput).focus();
    } else{
      this.correctAnswer = false;
    }
  }

}
