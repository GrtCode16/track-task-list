import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { DataService } from '../data.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as _moment from 'moment';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class MyTaskComponent implements OnInit {
  taskTitle: string | undefined;
  taskDesc: string | undefined;
  taskDate: any;
  isCompleted: boolean | undefined;
  // titleFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  date = new FormControl(moment());
  durationInSeconds = 5;

  constructor(private dataService: DataService, private _dateAdapter: DateAdapter<any>, private _snackBar: MatSnackBar) {
    this.resetForm();
  }

  ngOnInit(): void {
    
  }

  resetForm() {
    this.taskTitle = '';
    this.taskDesc = '';
    this.taskDate = moment();
    this.isCompleted = false;
  }

  saveTask() {
    if (this.taskTitle) {
      this.dataService.saveTask({
        title: this.taskTitle,
        desc: this.taskDesc,
        date: this.taskDate.format(),
        isCompleted: this.isCompleted
      });
      this.openSnackBar();
      this.resetForm();
    } else {
      this._snackBar.open('Please enter Title', '', {
        duration: 3000
      });
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(NotificationComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: './snack-bar.html',
  styles: [
    `
    .notification-bar {
      color: hotpink;
    }
  `,
  ],
})
export class NotificationComponent {}