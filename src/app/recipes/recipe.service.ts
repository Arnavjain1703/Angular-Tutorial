import {Recipe} from './recipe.model'
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


 @Injectable ()
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();
    // recipeSelected=new EventEmitter<Recipe>();
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
      getRecipe(index:number)
{
     return this.recipes.slice()[index];
}
addRecipe(recipe:Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice())
}
updateRecipe(index:number,newRecipe:Recipe)
{
this.recipes[index]=newRecipe;
this.recipesChanged.next(this.recipes.slice())

}
}