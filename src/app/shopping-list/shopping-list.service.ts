import { ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: ingredient[] = [
            new ingredient('Apples', 5),
            new ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    ingredientsEmit = new EventEmitter<ingredient[]>();

    addIngredient(Ingredient:ingredient){
        this.ingredients.push(Ingredient);
        this.ingredientsEmit.emit(this.ingredients.slice());
    }
}