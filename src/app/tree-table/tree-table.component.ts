import { Component, Input, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  prize: number;
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  // {
  //   name: 'Fruit',prize:290,
  //   children: [
  //     {name: 'Apple ',prize:40},
  //     {name: 'Banana',prize:30},
  //     {name: 'Fruit loops',prize:90},
  //   ]
  // }, {
  //   name: 'Vegetables',prize:390,
  //   children: [
  //     {
  //       name: 'Green',prize:40,
  //       children: [
  //         {name: 'Broccoli',prize:40},
  //         {name: 'Brussels sprouts',prize:40},
  //       ]
  //     }, {
  //       name: 'Orange',prize:140,
  //       children: [
  //         {name: 'Pumpkins',prize:90},
  //         {name: 'Carrots',prize:30},
  //       ]
  //     },
  //   ]
  // },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  prize:number;
}


@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {
  displayedColumns: string[] = ['name','prize', ];
  @Input () data:any=[]
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      prize:node.prize,
     
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children,
   );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() 
{
    this.dataSource.data = this.data;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


ngOnInit() {
  console.log(this.treeControl)
  console.log(this.data);
  this.dataSource.data = this.data;
 
}


}
