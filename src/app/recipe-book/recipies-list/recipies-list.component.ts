import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg"),
    new Recipe("A Test Recipe", "This is simply a test", "https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg")
  ];
  @Output() recipeEmit = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onEmitUp(recipe:Recipe){
    this.recipeEmit.emit(recipe);
  }

}
