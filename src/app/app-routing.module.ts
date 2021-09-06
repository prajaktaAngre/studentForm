import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BTableComponent } from './b-table/b-table.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path : '', redirectTo : '/students', pathMatch : 'full'},
  { path  : 'students', component : StudentDetailsComponent},
  {path : 'btable', component :BTableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
