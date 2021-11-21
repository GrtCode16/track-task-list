import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyTaskComponent} from './my-task/my-task.component';
import {MyTaskListComponent} from './my-task-list/my-task-list.component';

const routes: Routes = [
  { path: '', component: MyTaskComponent },
  { path: 'my-task-list', component: MyTaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
