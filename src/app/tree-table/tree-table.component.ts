import { Component, Input, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  prize: number;
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
 
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
  displayedColumns=[] = ['name','prize', ]
  
  @Input () treeData:any=[]
  @Input ()  treeHeaders:any;
  
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
    this.dataSource.data = this.treeData;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


ngOnInit() {
  console.log(this.treeControl)
  console.log(this.treeHeaders);
  this.dataSource.data = this.treeData;
  var keys = Object.keys(this.treeData[0]);
  console.log(keys)
  

  

  
}




}
