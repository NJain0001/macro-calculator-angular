import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from '../calculator/interfaces/UserData';
import { CalculatorService } from './services/calculator.service';
import { Calories } from './interfaces/Calories';
import { MassMacronutrients } from './interfaces/MassMacronutrients';
import { WarningMessage } from './interfaces/WarningMessage';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  userData: UserData;
  calories: Calories;
  caloriesInGrams: MassMacronutrients;
  warningMessage: WarningMessage;

  constructor(private calculatorService: CalculatorService) {
    // this.userData = {
    //   weight: 190,
    //   timeFrame: new Date('11/12/2020'),
    //   weightGoal: 187,
    //   weightMultiplier: 14.5,
    //   weightChangePerWeek: -3
    // };
  }

  calculateMacros(userInputForm: NgForm) {

    this.userData = userInputForm.value;
    this.calories = this.calculatorService.calculateCalories(this.userData);
    this.caloriesInGrams = this.calculatorService.calculateGramsFromCalories(this.calories);
    this.warningMessage = {
      message: this.calculatorService.determineWeightChangeTooRisky(this.userData)
    }



  }

}
