import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-data',
  templateUrl: './tree-data.component.html',
  styleUrls: ['./tree-data.component.scss']
})
export class TreeDataComponent implements OnInit {
  treeHeaderdata=[
    {
      name: 'Fruit',prize:290,
      children: [
        {name: 'Apple ',prize:40},
        {name: 'Banana',prize:30},
        {name: 'Fruit loops',prize:90},
      ]
    }, {
      name: 'Vegetables',prize:390,
      children: [
        {
          name: 'Green',prize:40,
          children: [
            {name: 'Broccoli',prize:40},
            {name: 'Brussels sprouts',prize:40},
          ]
        }, {
          name: 'Orange',prize:140,
          children: [
            {name: 'Pumpkins',prize:90},
            {name: 'Carrots',prize:30},
          ]
        },
      ]
    },
  ];
  tableHeaders=[{
    Fruits_Names :'Fruits Names',
     Fruits_prize:'Fruits prize'
  }]
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.treeHeaderdata)
    this.treeHeaderdata;
  }

}
