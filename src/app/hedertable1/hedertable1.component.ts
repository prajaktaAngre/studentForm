import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hedertable1',
  templateUrl: './hedertable1.component.html',
  styleUrls: ['./hedertable1.component.scss']
})
export class Hedertable1Component implements OnInit {
  // headers={
  //   email:'prajkta@gmail.com',
  //   name:'prjkta'
  // }
  headers=[{
    name:'prjkta',
    email:'abc@gmail.com'
    },{
    name:'mansi',
    email:'xyz@gmail.com'
    }]
  constructor() { }

  ngOnInit(): void {
    console.log(this.headers)
    this.headers;
    

  }

}
