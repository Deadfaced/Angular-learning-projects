import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Strawberries', 17),
    new Ingredient('Bananas', 12),
    new Ingredient('Pineapples', 2),
  ];

  onIngredientAdded(event : Ingredient){
    this.ingredients.push(event);
  }
}
