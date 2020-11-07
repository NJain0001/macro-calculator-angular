import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  getLifestyleSelection(): any {
    return [
      {
        Name: 'Sedentary',
        Description: 'Little or no activity',
        Multiplier: 12.5
      },
      {
        Name: 'Moderately active',
        Description: '1 hour of physical activity a day in addition to regular daily activities',
        Multiplier: 14.5
      },
      {
        Name: 'Vigorous activity',
        Description: 'A lot of workouts',
        Multiplier: 16.5
      },
      {
        Name: 'Athletic lifestyle involved in heavy training',
        Description: ' about 15-20 hrs a week of training',
        Multiplier: 19
      },
      {
        Name: 'Heavy to extreme training',
        Description: 'think Olympian like Michael Phelps',
        Multiplier: 22
      }
    ];
  }
}
