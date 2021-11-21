import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MyTaskListComponent } from './my-task-list/my-task-list.component';
import { MyTaskComponent } from './my-task/my-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTaskListComponent,
    MyTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [
    MatDatepickerModule,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
