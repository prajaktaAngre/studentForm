import { Component, OnInit } from '@angular/core';
export interface student {
  name: string;
  recordId: number;
  stream: string;
  hobbies: any;
  percentage:any;
}

const ELEMENT_DATA: student[] = [
  {recordId: 1, name: 'Swarali', stream: 'Computer Science', hobbies: ['Cricket','sa'],percentage:70},
  {recordId: 2, name: 'Shweta', stream: 'Mechanical', hobbies: ['Dance'],percentage:80},
  {recordId: 3, name: 'Sayali', stream: 'BCS Science', hobbies: ['Singing'],percentage:87},
  {recordId: 4, name: 'Bela', stream: 'Electrical', hobbies: ['Ludo'],percentage:79},
  {recordId: 5, name: 'Boron', stream:'Computer Science', hobbies: ['Basketboll'],percentage:78},
]
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  displayedColumns: string[] = ['recordId', 'name', 'stream', 'hobbies','percentage','edit','delete'];
  dataSource = ELEMENT_DATA;
  items: any = [];
  student: any = [];
  modeOn: boolean=false;
  data: any;
  id: any;
 
  // methods
  addItem(newItem: any) {
    // this.dataSource.length=this.id;
    if ( this.dataSource && this.modeOn === true) {
      const recordIndex = this.dataSource.findIndex((object: any) =>
        object.recordId == newItem.recordId
        
      )
      console.log(recordIndex)
      // console.log(recordId)
      this.dataSource.splice(recordIndex, 1, newItem);
      this.data = {};//multiple updatees and edits
      this.modeOn = false;
      console.log("dataSource", this.dataSource)
      console.log()
      console.log("data updated successuly", newItem)
     
    

    }
    else {
     
         let tempArray = this.dataSource;
         tempArray.push(newItem)
         this.dataSource = [...tempArray]
         console.log("data emits successuly", newItem)
         console.log("items",this.dataSource)
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
  constructor() { }

  ngOnInit(): void {
    this.dataSource;
  
     console.log(this.dataSource)
    
  }

}
