import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private unsubscribe$ = new Subject();

  constructor(
      private recipeService: RecipeService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipesChanged
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        },
        error => console.log(error),
        () => console.log('stream has been completed')
      );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
