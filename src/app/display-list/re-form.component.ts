import { Component, OnDestroy, OnInit } from '@angular/core';
import { TempServiceService } from '../shared/temp-service.service';


@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.scss']
})
export class ReFormComponent implements OnInit, OnDestroy {
  id:any;
  students: any = [];
  data: any;
  modeOn = false;
  updatedValues = [];
  items :any=[]
  subscription: any;
  send: any;


  constructor(public recMsg: TempServiceService) {
  }

  ngOnInit(): void {
    this.subscription = this.recMsg.sendMsg.subscribe((msgToShow: any) => {
      console.log("receivvvved", msgToShow)
      this.students.push(msgToShow)

    })
  }
  updateInfo(i: any, index: any) {
    this.modeOn = true;
    this.data = this.students[index]
    console.log('data', this.data);
  }
  deleteInfo(i: any, index: any) {
    this.students.splice(index, 1)
    // this.students.reset();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addItem(newItem: any) {
    // this.items.push(newItem);
    console.log("hi",newItem)
    console.log("myitems",this.students)
    if(this.students && this.modeOn===true){
     this.id=this.students.findIndex((search:any)=>search.recordId==newItem.recordId)
     
      console.log("myid",this.id);
      this.students.splice(this.id, 1, newItem);
      console.log("hello",newItem)
    
  }
    else{
      this.items.push(newItem);
      console.log("hi",newItem)
    }
      
    
  }
 
}


