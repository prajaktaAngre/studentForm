import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hedertable1',
  templateUrl: './hedertable1.component.html',
  styleUrls: ['./hedertable1.component.scss']
})
export class Hedertable1Component implements OnInit {
  headers = [{
    Title: 'name',

  },
  {
    Title: 'email'
  }

  ];
  data = [{
    name: 'prjkta ',
    email: 'abc@gmail.com',
    age: 22,
  }, {
    name: 'mansi uttam mali',
    email: 'xyz@gmail.com',
    age: 22,
  },
  {
    name: 'prjkta ',
    email: 'abc@gmail.com',
    age: 22,
  }, {
    name: 'mansi uttam mali',
    email: 'xyz@gmail.com',
    age: 20,

  },
  {
    name: 'prjkta ',
    email: 'abc@gmail.com',
    age: 23,
  }, {
    name: 'mansi uttam mali',
    email: 'xyz@gmail.com',
    age: 27,

  },
  {
    name: 'prjkta ',
    email: 'abc@gmail.com',
    age: 29
  }, {
    name: 'mansi uttam mali',
    email: 'xyz@gmail.com',
    age: 30,

  },
  {
    name: 'prjkta ',
    email: 'abc@gmail.com',
    age: 45
  }, {
    name: 'mansi uttam mali',
    email: 'xyz@gmail.com',
    age: 43,

  }]
  constructor() { }

  ngOnInit(): void {
    console.log(this.headers)
    this.headers;
    console.log(this.data);
    this.data



  }

}
