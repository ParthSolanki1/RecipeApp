import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() show = new EventEmitter<{changeTo: string}>();

  onClickRecipe() { 
    this.show.emit({changeTo: "Recipes"});
  }

  onClickList() {
    this.show.emit({changeTo: "Shopping List"})
  }

  constructor() { }

  ngOnInit() {
  }

}
