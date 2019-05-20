import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addedIngredient = new EventEmitter<ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(nameInput, numberInput){
    const Ingredient = new ingredient(nameInput.value, numberInput.value);
    this.shoppingListService.addIngredient(Ingredient);
  }

}
