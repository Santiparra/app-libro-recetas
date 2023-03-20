import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {


  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();

  onSelectRecipe() {
    this.selectedRecipe.emit();
  }

}
