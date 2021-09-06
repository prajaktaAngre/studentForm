import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TempServiceService } from '../shared/temp-service.service';

@Component({
  selector: 'app-b-table',
  templateUrl: './b-table.component.html',
  styleUrls: ['./b-table.component.scss']
})
export class BTableComponent implements OnInit {
  @Input() data: any = {}
  @Input() editMode: boolean = true;
  @Input() changeUpdateValue: any;
  @Output() newItemEvent = new EventEmitter;
  id: any;
  students: any = [];
  
  modeOn = false;
  updatedValues = [];
  items: any = []
  subscription: any;
  send: any;
  in: any;

  
  row: any;
  dataSource: any;
  constructor(public recMsg: TempServiceService) {
  }

  ngOnInit(): void {
    this.subscription = this.recMsg.sendMsg.subscribe((msgToShow: any) => {
      console.log("receivvvved", msgToShow)
      this.students.push(msgToShow)
      this.dataSource = [...this.students];
      console.log(this.dataSource)

    })
  }  
  updateInfo(itemb: any) {
    console.log(itemb);   
    this.modeOn = true;
    this.data = itemb;

  }
 
  deleteInfo(index: any) {
   console.log(index);
   console.log(this.students);
   
    console.log(this.dataSource);
    var delBtn = confirm(" Do you want to delete ?");
    console.log(this.dataSource);
    this.students.splice(index, 1);
    console.log(this.students);
    this.dataSource=[...this.students];
    console.log("after",this.dataSource);
    
    
   
     
    }
   
  addItem(newItem: any) {
    
    console.log("hi", newItem)
    console.log("myitems", this.students)
    if (this.dataSource && this.modeOn === true) {
      const recordIndex = this.dataSource.findIndex((object: any) =>
        object.recordId == newItem.recordId
      )

      console.log("myid", this.id);
      this.dataSource.splice(recordIndex, 1, newItem);
      console.log("dataSource", this.dataSource)

    }
    else {
      this.items.push(newItem);
      console.log("hi", newItem)
    }


  }}
