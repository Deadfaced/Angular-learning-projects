import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('New Recipe 1', 'First test recipe', 'https://picsum.photos/300/200?random=1'),
    new Recipe('New Recipe 2', 'Second test recipe', 'https://picsum.photos/300/200?random=2'),
    new Recipe('New Recipe 3', 'Third test recipe', 'https://picsum.photos/300/200?random=3'),
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  showRecipe(r: Recipe){
    this.selectedRecipe.emit(r);
  }
}
