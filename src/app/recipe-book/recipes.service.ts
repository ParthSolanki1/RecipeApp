import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is simply a test", "https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg", [new ingredient('apples', 2), new ingredient('bananas', 20)]),
        new Recipe("A Test Recipe", "This is simply a test", "https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg", [new ingredient('daal', 3000), new ingredient('rice', 20)])
    ];
    
    recipeEmit = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }
}