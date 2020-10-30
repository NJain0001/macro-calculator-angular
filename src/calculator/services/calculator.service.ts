import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/UserData';
import { Calories } from '../interfaces/Calories';
import { MassMacronutrients } from '../interfaces/MassMacronutrients';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateCalories(userData: UserData): Calories {
    const totalCalories = (userData.weight * userData.weightMultiplier) - 1000;

    const calories: Calories = {
    Total: totalCalories,
    Protein: totalCalories * (30 / 100),
    Carb: totalCalories * (40 / 100),
    Fat: totalCalories * (30 / 100)
    };

    return calories;
  }

  calculateGramsFromCalories(calories: Calories): MassMacronutrients {
    
    const caloriesInGram: MassMacronutrients = {
      Protein: Math.round(calories.Protein / 4),
      Carb: Math.round(calories.Carb / 4),
      Fat: Math.round(calories.Fat / 9)
    };

    return caloriesInGram;
  }
}
