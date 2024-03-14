import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'New Recipe 1',
            'First test recipe',
            'https://picsum.photos/300/200?random=1',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'New Recipe 2',
            'Second test recipe',
            'https://picsum.photos/300/200?random=2',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Burguer', 1)
            ]
        ),
        new Recipe(
            'New Recipe 3',
            'Third test recipe',
            'https://picsum.photos/300/200?random=3',
            [
                new Ingredient('Eggs', 3),
                new Ingredient('Cheese slice', 4)
            ]
        ),
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}