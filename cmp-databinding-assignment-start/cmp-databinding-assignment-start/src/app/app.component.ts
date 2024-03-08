import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number = 0;
  oddCount: number[] = [];
  evenCount: number[] = [];

  incNum(n: number){
    this.num = n;
    if(this.num % 2 == 0){
      this.evenCount.push(this.num);
    }
    else{
      this.oddCount.push(this.num);
    }
  }

  onGameStopped(n: number){
    this.num = n;
  }
}
