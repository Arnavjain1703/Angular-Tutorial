import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
recipies:Recipe[]=[
  new Recipe('A test Recipe','this is simple test,','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg'),
  new Recipe('A test Recipe','this is simple test,','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg'),
];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
       this.recipeWasSelected.emit(recipe);
  }
}
