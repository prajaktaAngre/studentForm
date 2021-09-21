import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReFormComponent } from './display-list/re-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BTableComponent } from './b-table/b-table.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { Hedertable1Component } from './hedertable1/hedertable1.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import {MatTreeModule} from '@angular/material/tree';
import { TreeDataComponent } from './tree-data/tree-data.component';
import { MatComponentsComponent } from './mat-components/mat-components.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    ReFormComponent,
    StudentDetailsComponent,
    BTableComponent,
    ReusableTableComponent,
    Hedertable1Component,
    TreeTableComponent,
    TreeDataComponent,
    MatComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatTreeModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
