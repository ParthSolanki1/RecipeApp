import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesListComponent } from './recipe-book/recipies-list/recipies-list.component';
import { RecipiesDetailsComponent } from './recipe-book/recipies-details/recipies-details.component';
import { RecipeitemComponent } from './recipe-book/recipies-list/recipeitem/recipeitem.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipiesListComponent,
    RecipiesDetailsComponent,
    RecipeitemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
