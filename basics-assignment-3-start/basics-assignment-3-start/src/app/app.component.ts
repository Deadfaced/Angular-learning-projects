import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  buttonClicks = 0;
  clicksLog = [];

  onToggle() {
    this.showParagraph = !this.showParagraph;
    this.buttonClicks++;
    this.clicksLog.push(this.buttonClicks);
  }
}
