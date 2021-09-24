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
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import { Layout1Component } from './layout1/layout1.component';
import { PaginationTableComponent } from './pagination-table/pagination-table.component';
import { PaginationDataComponent } from './pagination-data/pagination-data.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavFormComponent } from './sidenav/sidenav-form/sidenav-form.component';

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
    MatComponentsComponent,
    Layout1Component,
    PaginationTableComponent,
    PaginationDataComponent,
    SidenavComponent,
    SidenavFormComponent
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
    MatListModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
