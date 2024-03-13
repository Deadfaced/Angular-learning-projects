import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
  @Input() rTitle: string;
  @Input() kTitle: string;
  @Input() cPath: string;
  @Input() buttText: string;

}
