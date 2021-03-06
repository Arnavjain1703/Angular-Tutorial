
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
    ingredients:Ingredient[];
    private subscription:Subscription;
    // =[
    //  new Ingredient('Apples',5),
    //  new Ingredient('TOMATOES',5),
    // ];
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {

this.ingredients=this.slService.getIngredients();
  
  // onIngredientAdded(ingredient:Ingredient)
this.subscription=this.slService.ingredientsChanged
.subscribe(
  (ingredients:Ingredient[])=>{
   this.ingredients= ingredients; 
  });
  
}

  // {
  //   this.ingredients.push(ingredient);    
  // }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
onEditItem(index:number)
{
this.slService.startedEditing.next(index);
}
}
 