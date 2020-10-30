import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from '../calculator/interfaces/UserData';
import { CalculatorService } from './services/calculator.service';
import { Calories } from './interfaces/Calories';
import { MassMacronutrients } from './interfaces/MassMacronutrients';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  userData: UserData;
  calories: Calories;
  caloriesInGrams: MassMacronutrients;

  constructor(private calculatorService: CalculatorService) {}

  calculateMacros(userInputForm: NgForm) {
    this.userData = userInputForm.value;

    this.calories = this.calculatorService.calculateCalories(this.userData);
    this.caloriesInGrams = this.calculatorService.calculateGramsFromCalories(this.calories);



  }

}
