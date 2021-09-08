import { Component, Input, OnInit } from '@angular/core';
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
       name:'', 
  },
  {
    
    title: 'email',
    key_name: 'Email Id',
    email: '',
    flexPercent: '25',
    dtype: '',
    name:'', 
}
];
@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})

export class ReusableTableComponent implements OnInit {
  @Input() tableHeaders: any = []
  @Input() data:any;
  displayedColumns: any[] = [];
  students: any = [];
  dataSource: any = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
    console.log("reusuable table")
    console.log("students",this.students)
    console.log("object",Object.keys(this.students));
    console.log(this.tableHeaders); 
    this.displayedColumns=Object.keys(this.tableHeaders[0])
    this.dataSource=this.tableHeaders;
    // let i=Object.keys(this.tableHeaders[0])
    // this.dataSource=[i]
    console.log(this.tableHeaders);
    

    
  }
 

}
