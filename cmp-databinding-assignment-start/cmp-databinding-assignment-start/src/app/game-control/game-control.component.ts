import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() increment = new EventEmitter<number>();
  num: number = 0;

  incrementNumber(){
    console.log(this.num);
  
    setTimeout(() => {
      this.num++;
      this.increment.emit(this.num);
    }, 1000);
  }
}
