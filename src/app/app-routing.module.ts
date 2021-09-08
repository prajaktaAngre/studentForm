import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BTableComponent } from './b-table/b-table.component';
import { ReFormComponent } from './display-list/re-form.component';
import { Hedertable1Component } from './hedertable1/hedertable1.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path : '', redirectTo : '/students', pathMatch : 'full'},
  { path  : 'students', component : ReFormComponent},
  {path : 'btable', component :BTableComponent},
  {path : 'reusable', component :Hedertable1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
