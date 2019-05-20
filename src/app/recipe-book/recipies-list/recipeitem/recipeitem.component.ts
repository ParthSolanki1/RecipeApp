import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onClick() {
    this.recipesService.recipeEmit.emit(this.recipe);
  }

}
