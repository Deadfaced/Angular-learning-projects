import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Ingredient } from '../../shared/ingredient.model';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  onAddIngredient(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.addIngredient.emit(newIngredient);
  }
}
