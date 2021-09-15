import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hedertable1',
  templateUrl: './hedertable1.component.html',
  styleUrls: ['./hedertable1.component.scss']
})
export class Hedertable1Component implements OnInit {
  headers=[{
    Title:'Full Name',
    
  },
 { 
   Title:'email'
 }
 
 ];
    data=[{
      FullName:'prjkta ',
    email:'abc@gmail.com'
    },{
      FullName:'mansi uttam mali',
    email:'xyz@gmail.com'

    }]
  constructor() { }

  ngOnInit(): void {
    console.log(this.headers)
    this.headers;
    console.log(this.data);
    this.data
  
    

  }

}
