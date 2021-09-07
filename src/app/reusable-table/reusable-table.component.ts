import { Component, Input, OnInit } from '@angular/core';
export interface students {
  name: string;
  email: any;
  title: any;
  key_name: any;
  dtype: any;
  
}

const ELEMENT_DATA: students[] = [
 
  {
       name:'',
       title: '',
       email: '',
       key_name: '',
       dtype: '',
         
  }
];
@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})

export class ReusableTableComponent implements OnInit {
  @Input() tableHeaders: any = {};
  @Input() data:any;
  displayedColumns: any[] = ['name', 'email', 'title', 'key_name', 'dtype'];
  dataSource: any = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
    console.log("reusuable table")
  }

}
