import {Recipe} from './recipe.model'
import { EventEmitter } from '@angular/core';
 
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
   private  recipes:Recipe[]=[
        new Recipe('A test Recipe','this is simple test,','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg'),
        new Recipe('A test Recipe','this is simple test,','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg'),
      ];  
      getRecipes()
      {
          return this.recipes.slice();
      }
}