import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

 @Injectable ()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
   private  recipes:Recipe[]=[
        new Recipe('A test Recipe','this is simple test,','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg',[
            new Ingredient ('tikki' ,10),
            new Ingredient ('paneer',2)

        ]),
        new Recipe('A test Recipe','this is simple test,','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg',[
            
            new Ingredient ('tikki2' ,10),
            new Ingredient ('paneer2',2)
  
        ]),
      ];  
      constructor(private slService:ShoppingListService){}
      getRecipes()
      {
          return this.recipes.slice();
      }
      addIngredientsToShoppingLIst(ingredients:Ingredient[])
      {
          this.slService.addIngredients(ingredients);
      }
}      