import { Component, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'form1';
  subscription: any;
  recordId:number=0;
  reason='';
  constructor(public submitDataReceive:SidenavService){}
  ngOnInit(){
    this.subscription=this.submitDataReceive.submitDataSend.subscribe((msgToShow:any)=>{
      console.log("receive Submited data in service",msgToShow)
      
      
    })
  }
  submitedData(){
    // this.submitDataReceive.onSubmit(this.recordId,this.reason).subscribe((data: any)=>{
    //   console.log('submited data using service',data)

    //   })
  }

  }



