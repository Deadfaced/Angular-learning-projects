import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

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
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    clearIngredients(){
        this.setIngredients([]);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}