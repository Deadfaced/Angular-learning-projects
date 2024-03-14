import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    newIngredient = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Strawberries', 17),
        new Ingredient('Bananas', 12),
        new Ingredient('Pineapples', 2),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    setIngredients(ingredients: Ingredient[]){
        this.ingredients = ingredients;
    }

    addIngredient(ing: Ingredient){
        this.ingredients.push(ing);
        console.log(this.getIngredients());
    }
    clearIngredients(){
        this.setIngredients([]);
    }
}