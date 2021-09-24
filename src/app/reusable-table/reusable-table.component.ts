import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface students {

  name: string;
  email: any;
  title: any;
  key_name: any;
  flexPercent: any,
  dtype: any;

}

const ELEMENT_DATA: students[] = [

  {

    title: 'full name',
    key_name: ' Full Name',
    email: '',
    flexPercent: '25',
    dtype: '',
    name: '',
  },
  {

    title: 'email',
    key_name: 'Email Id',
    email: '',
    flexPercent: '25',
    dtype: '',
    name: '',
  }
];
@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})

export class ReusableTableComponent implements OnInit {
  @Input() tableHeaders: any=[]
  @Input() tableData: any;
  displayedColumns: any[] = [];
  students: any = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatPaginator)
   paginator!: MatPaginator;
   
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);
    
  }
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
}

setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator)

    
}
 
  
  ngOnInit(): void {
    console.log("reusuable table")
    console.log("students", this.students)
    console.log(this.tableHeaders);
    console.log("object", Object.keys(this.students));
    console.log(this.tableHeaders);
    this.displayedColumns = Object.keys(this.tableHeaders[0])
    this.dataSource = this.tableHeaders;
    console.log("tableheadrs",this.tableHeaders);
    console.log("datasource",this.dataSource);
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);
    this.dataSource = new MatTableDataSource(this.tableHeaders);
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);
    console.log(this.dataSource);
    

  }


}
