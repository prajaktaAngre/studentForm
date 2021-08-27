import { Component, OnDestroy, OnInit } from '@angular/core';
import { TempServiceService } from '../shared/temp-service.service';


@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.scss']
})
export class ReFormComponent implements OnInit,OnDestroy {
  students:any=[];
  stud=["name","email","Gender","Year","State"]

  subscription: any;
  send: any;
 

  constructor(public recMsg:TempServiceService ) {
 }

  ngOnInit(): void {
    this.subscription = this.recMsg.sendMsg.subscribe((msgToShow: any) => {
    console.log("receivvvved",msgToShow)
    this.students.push(msgToShow)
     
  })
  }
  updateInfo(){
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
