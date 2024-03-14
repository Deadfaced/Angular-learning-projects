import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('New Recipe 1', 'First test recipe', 'https://picsum.photos/300/200?random=1'),
        new Recipe('New Recipe 2', 'Second test recipe', 'https://picsum.photos/300/200?random=2'),
        new Recipe('New Recipe 3', 'Third test recipe', 'https://picsum.photos/300/200?random=3'),
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}