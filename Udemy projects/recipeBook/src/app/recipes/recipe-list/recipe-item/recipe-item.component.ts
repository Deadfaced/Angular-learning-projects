import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() item: Recipe;
  @Output() linkSelected = new EventEmitter<void>();

  onLinkClick(){
    this.linkSelected.emit();
  }
}
