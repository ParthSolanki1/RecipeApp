import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addedIngredient = new EventEmitter<ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(nameInput, numberInput){
    const Ingredient = new ingredient(nameInput.value, numberInput.value);
    this.addedIngredient.emit(Ingredient);
  }

}
