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
    const caloriesPerDay = this.calculateCalorieChangePerDay(userData);
    const totalCalories = (userData.weight * userData.weightMultiplier) + caloriesPerDay;

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

  determineWeightChangeTooRisky(userData: UserData): string {
    let message = '';

    if (userData.weightChangePerWeek > 2) {
      message = `The recommended weight gain is 1-2 lbs/week. Your weight gain rate is ${userData.weightChangePerWeek} lbs/week`;

    } else if (userData.weightChangePerWeek < -2) {
      message = `The recommended weight loss is 1-2 lbs/week. Your weight loss rate is ${Math.abs(userData.weightChangePerWeek)} lbs/week`;

    }

    return message;
  }

  convertMassUnits(weight: number, unit: string) {
    if (unit === 'kg') {
      weight = weight * 2.20462;
    }

    return weight;
  }

  private calculateCalorieChangePerDay(userData: UserData): number {
    const weeksFromGoal = this.getDateDifferenceInWeeksFromCurrentDate(userData.timeFrame);
    const weightDifference = userData.weightGoal - userData.weight;

    userData.weightChangePerWeek = weightDifference / weeksFromGoal;

    const caloriesPerDays = userData.weightChangePerWeek * 500;

    return caloriesPerDays;

  }

  private getDateDifferenceInWeeksFromCurrentDate(timeFrameDate: Date): number {
    const date = new Date(timeFrameDate);
    const currentDate = new Date();

    const weeksFromDate = Math.ceil((date.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24 / 7);
    return weeksFromDate;
  }
}
