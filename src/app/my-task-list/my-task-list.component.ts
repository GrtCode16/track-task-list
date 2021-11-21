import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import * as moment from 'moment';

const dateFormat = "DD/MM/YYYY";

@Component({
  selector: 'app-my-task-list',
  templateUrl: './my-task-list.component.html',
  styleUrls: ['./my-task-list.component.scss']
})
export class MyTaskListComponent implements OnInit {
  events: string[] = [];
  range = new FormGroup({
    start: new FormControl(moment()),
    end: new FormControl(moment())
  });
  tasks: any = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  addEvent() {
    this.tasks = this.dataService.getTaskByDate(this.range.value);
  }

  dateRange() {
    return `${moment(this.range.value.start).format(dateFormat)} - ${moment(this.range.value.end).format(dateFormat)}`;
  }
}
