import { Component, OnDestroy, OnInit } from '@angular/core';
import { TempServiceService } from '../shared/temp-service.service';
export interface students {
  name: string;
  email: any;
  recordId: number;
  genders: any;
  toppings:any;
  selectstate:string
  edit:any;
  delete:any;
}

const ELEMENT_DATA: students[] = [
 
  {
    name: "manasi",
    email: "mansi@gmail.com",
    recordId: 1,
    genders: 'female',
    toppings: ["SY"],
    selectstate: "California",
    edit:"edit",
    delete:"delete"
   },
   {
    name: "prjkta",
    email: "prj@gmail.com",
    recordId: 2,
    genders: 'female',
    toppings: ["SY"],
    selectstate: "California",
    edit:"edit",
    delete:"delete",
   },
];

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
  in:any;
  im:any;
  displayedColumns: any[] = [ 'name', 'email','recordId', 'genders','toppings','selectstate','edit',
'delete'];
  dataSource:any= ELEMENT_DATA
  itemsb: any[] = [{ name: '' }, { name: '' }];
  itemsd: any[] = [{ name: '' }, { name: '' }];
  edit: any[] = [
    { name: "" },
    { name: "" },
  ];
  delete: any[] = [
    { name: "" },
    { name: "" },
  ];
  constructor(public recMsg: TempServiceService) {
  }

  ngOnInit(): void {
    this.subscription = this.recMsg.sendMsg.subscribe((msgToShow: any) => {
      console.log("receivvvved", msgToShow)
      this.students.push(msgToShow)
      this.dataSource=this.students;
      console.log(this.students)

    })
  }
  updateInfo(itemb: any) {
    console.log(itemb)
    this.modeOn = true;
    this.data = itemb
    // console.log('data', index);
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
    if(this.dataSource && this.modeOn===true){
     const recordIndex =this.dataSource.findIndex((object:any)=>
     object.recordId==newItem.recordId
     )
     
      console.log("myid",this.id);
      this.dataSource.splice(recordIndex, 1, newItem);
      console.log("dataSource",this.dataSource)
    
  }
    else{
      this.items.push(newItem);
      console.log("hi",newItem)
    }
      
    
  }
 
}


