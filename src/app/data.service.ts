import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(key: string) {
    return localStorage.getItem(key);
  }

  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  saveTask(payload: any) {
    this.setData(`${Math.random()}`, payload);
  }

  getAllTask() {
    return localStorage;
  }

  getTaskByDate(dateRange: any) {
    const tasks: any = [];

    Object.keys(localStorage).forEach(t => {
      if (localStorage[t]) {
        const parsedData = JSON.parse(localStorage[t]);
        const date = moment(parsedData.date);
        if (parsedData.isCompleted && date.isValid() && date.isBetween(moment(dateRange.start).subtract(1, 'days'), moment(dateRange.end).add(1, 'days'))) {
          tasks.push(parsedData);
        }
      }
    })
    return tasks;
  }
}
