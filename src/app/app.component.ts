import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'form1';
  subscription: any;
  // recordId:any
  reason='';
  meesage: any;
  sidenavSubscription: any;
  dataSource:any;
  @ViewChild('drawer')
  MatDrawer!: MatDrawer;
  modeOn=false;
  submit:any
  // MatDrawer:boolean=true
  constructor(public parentMsg:SidenavService){}
  addsidenav(event:any){
    this.MatDrawer.close();
    // this.parentMsg.sidenavOpen(false)
  }
  ngOnInit(){
   
    this.sidenavSubscription=this.parentMsg.sidenavOpenReturn().subscribe((value)=>{
      console.log("sidenavOpenReturn",value)
      // if(){
      //   this.MatDrawer.open();
      // }
      // else{
      this.MatDrawer.open();
      // }
     

    })
   
    
     
  }
  ngOnDestroy(){
    this.sidenavSubscription.unsubscribe();
  }
  
}

  



