import { Component, OnDestroy, OnInit } from '@angular/core';
import { TempServiceService } from '../shared/temp-service.service';


@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.scss']
})
export class ReFormComponent implements OnInit, OnDestroy {
  students: any = [];
  data: any;
  modeOn = false;
  updatedValues = [];
  items = ['item1', 'item2', 'item3', 'item4'];

  stud = ["name", "email", "Gender", "Year", "State"]

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
    this.students.reset();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
