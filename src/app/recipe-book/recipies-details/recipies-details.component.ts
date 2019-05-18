import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.component.html',
  styleUrls: ['./recipies-details.component.css']
})
export class RecipiesDetailsComponent implements OnInit {
  @Input() recipe:Recipe = new Recipe("", "", "");

  constructor() { }

  ngOnInit() {
  }
  
}
