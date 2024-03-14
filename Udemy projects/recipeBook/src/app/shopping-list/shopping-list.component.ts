import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onIngredientAdded(event : Ingredient){
    this.shoppingListService.addIngredient(event);
    this.ingredients = this.shoppingListService.getIngredients();
  }
  onIngredientsClear(){
    this.shoppingListService.clearIngredients();
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
