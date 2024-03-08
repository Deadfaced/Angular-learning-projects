import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() increment = new EventEmitter<number>();
  @Output() stop = new EventEmitter<number>();
  @Output() oddNumber = new EventEmitter<number>();
  @Output() evenNumber = new EventEmitter<number>();
  num: number = 0;
  interval: any;

  incrementNumber(number: number){
    
    this.interval = setInterval(() => {
      this.increment.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  onStopGame(n: number){
    this.stop.emit(this.num);
    clearInterval(this.interval);
  }
}