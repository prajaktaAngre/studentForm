import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'form1';
  subscription: any;
  // recordId:any
  reason='';
  meesage: any;
  sidenavSubscription: any;
  dataSource:any;
  @ViewChild('drawer')
  MatDrawer!: MatDrawer;
  
  
  constructor(public parentMsg:SidenavService){}
  ngOnInit(){
    // this.subscription=this.parentMsg.onSubmitReturn().subscribe(()=>{
    //   console.log("receive Submited data in service",)
    //   this.dataSource.push()
            
    // })
    this.sidenavSubscription=this.parentMsg.sidenavOpenReturn().subscribe((value)=>{
      console.log("sidenavOpenReturn",value)
      this.MatDrawer.open();
    })

    
  }
  
}

  



