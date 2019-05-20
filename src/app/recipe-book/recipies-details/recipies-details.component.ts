import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.component.html',
  styleUrls: ['./recipies-details.component.css']
})
export class RecipiesDetailsComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredientsToSL(){
    for (let Ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngredient(Ingredient);
    }
  }
  
}
