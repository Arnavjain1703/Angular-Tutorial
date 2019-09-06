
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients:Ingredient[]
    // =[
    //  new Ingredient('Apples',5),
    //  new Ingredient('TOMATOES',5),
    // ];
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {

this.ingredients=this.slService.getIngredients();
  
  // onIngredientAdded(ingredient:Ingredient)
this.slService.ingredientsChanged
.subscribe(
  (ingredients:Ingredient[])=>{
   this.ingredients= ingredients; 
  });
  
}

  // {
  //   this.ingredients.push(ingredient);    
  // }

}
 