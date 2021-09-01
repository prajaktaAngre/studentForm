import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReFormComponent } from './display-list/re-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path : '', redirectTo : '/students', pathMatch : 'full'},
  { path  : 'students', component : StudentDetailsComponent},
  {path : 'list', component :ReFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
