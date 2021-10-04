
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from '../sidenav.service';

export interface student {
  name: string;
  recordId: number;
  stream: string;
  hobbies: any;
  percentage:any;
  telephone:number;
  email:any;

}

const ELEMENT_DATA: student[] = [
  {recordId: 1, name: 'Swarali', stream: 'Computer', hobbies: ['gyming'],percentage:70,telephone:9134567890,email:'swara@gmail.com'},
  {recordId: 2, name: 'Shweta', stream: 'Mechanical', hobbies: ['coding'],percentage:80,telephone:9134567890,email:'shwetara@gmail.com'},
  {recordId: 3, name: 'Sayali', stream: 'IT', hobbies: ['reading stories'],percentage:87,telephone:9134567890,email:'swara@gmail.com'},
  {recordId: 4, name: 'Bela', stream: 'Electrical', hobbies: ['coding'],percentage:79,telephone:9134567890,email:'sra@gmail.com'},
  {recordId: 5, name: 'Boron', stream:'Computer', hobbies: ['gyming'],percentage:78,telephone:9134567890,email:'lado@gmail.com'},
]
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit , OnDestroy{
  displayedColumns: string[] = ['recordId', 'name', 'stream', 'hobbies','percentage','telephone','email','edit','delete'];
  dataSource = ELEMENT_DATA;
  items: any = [];
  student: any = [];
  modeOn: boolean=false;
  data: any;
  id: any;
  checked=true;
  SidebarOPen=true;
  itemss: any;
  reason = '';
  students:any=[];
  // recordId=0;/
  @ViewChild('drawer')
  MatDrawer!: MatDrawer;
  subscription: any;
  recordId:any;
  profileFom: any;
  constructor(public parentMsg:SidenavService) { }
  close(reason: string) {
    this.MatDrawer.close();
  }
  
 
  addsidenav(sidenav: any) {
    this.itemss.push(sidenav);
  }
  addItem(newItem: any) {
    // this.parentMsg.onSubmit()
    console.log("initial id",newItem.recordId)

    if ( this.modeOn === true) {
      // let temp = this.dataSource;
      // const recordIndex = this.dataSource.findIndex((object: any) => 
      //    object.recordId == newItem.recordId  //3 
      // )
      // console.log(recordIndex)
      // console.log(newItem)
      // console.log();
      // this.dataSource.splice(recordIndex, 1, newItem);
      // this.data = {};//multiple updatees and edits
      // this.modeOn = false;
      // console.log("dataSource", this.dataSource)
      // this.dataSource = [...temp]
      // console.log("data updated successuly", this.dataSource)
      // this.MatDrawer.close();
    }
    else if(newItem){
        //  newItem.recordId=this.dataSource.length+1;
        // console.log('after length',newItem.recordId);
        //  let tempArray = this.dataSource;
        //  tempArray.push(newItem)
        //  this.dataSource = [...tempArray]
        //  console.log("data emits successuly", newItem)
        //  console.log("items",this.dataSource)
         this.MatDrawer.close();
    }

  }
  updateInfo(editedItem: any) {
    this.modeOn = true;
    console.log(editedItem);   
    
    this.data = editedItem;

  }
 
  
  deleteInfo(index: any) {
    
     var delBtn = confirm(" Do you want to delete ?");
     console.log(this.dataSource);
     this.dataSource.splice(index, 1);
     let tempArray = this.dataSource;
     this.dataSource = [...tempArray]
     console.log("after",this.dataSource);
      
     }
    
     onclick(){
     this.parentMsg.sidenavOpen(true)

     }
    
  ngOnInit(): void {
     console.log(this.dataSource)
     this.subscription=this.parentMsg.onSubmitReturn().subscribe((msgToShow)=>{
      if(this.modeOn){
        let temp = this.dataSource;
        const recordIndex = this.dataSource.findIndex((object: any) => 
           object.recordId == msgToShow.recordId  //3
            
        )
        console.log(recordIndex)
        console.log(msgToShow)
        console.log();
        
        this.dataSource.splice(recordIndex, 1, msgToShow);
        this.data = {};//multiple updatees and edits
        this.modeOn = false;
        console.log("dataSource", this.dataSource)
        
       
        this.dataSource = [...temp]
        
           console.log("data updated successuly", this.dataSource)
           this.MatDrawer.close();
      }
     
      // code for update data 
      
       
        else{
          console.log("receive Submited data in service",msgToShow)
          msgToShow['recordId'] = this.dataSource.length+1;
          console.log(msgToShow);
          this.dataSource.push(msgToShow)
          // this.MatDrawer.close();
          console.log(this.dataSource);
          let tempArray = this.dataSource;
          this.dataSource = [...tempArray]
          console.log(this.dataSource);
          this.parentMsg.sidenavOpen(MatDrawer)
          this.MatDrawer.close(); 
          // this.MatDrawer.toggle();
        }
            
    })
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


