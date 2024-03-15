import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  @Input() detailedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService){}
  
  sendToSL(){
    for (let index = 0; index < this.detailedRecipe.ingredients.length; index++) {
      this.shoppingListService.addIngredient(this.detailedRecipe.ingredients[index]);
      console.log(this.detailedRecipe.ingredients[index]);
    }
  }
}
