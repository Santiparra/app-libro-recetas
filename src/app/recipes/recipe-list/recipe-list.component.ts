import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("receta","test","https://www.orientalmarket.es/recetas/wp-content/uploads/2022/03/receta-laab.jpg"),
    new Recipe("receta2","test2","https://www.orientalmarket.es/recetas/wp-content/uploads/2022/03/receta-laab.jpg")
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onSelectedRecipe(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem)
  }

}
