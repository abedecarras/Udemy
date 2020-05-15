import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  // private subscription: Subscription;
  private unsubscribe$ = new Subject();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    // this.subscription = this.shoppingListService.ingredientsChanged
    this.shoppingListService.ingredientsChanged
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (ingredients: Ingredient[]) => this.ingredients = ingredients,
        error => console.log('error: ', error),
        () => console.log('stream has been completed')
      );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
