import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sendMsg= new Subject();
  parentMsg=new Subject<any>();
  sidenavFlag=new Subject();
   perentMsg$=this.parentMsg.asObservable();
  constructor() { }
  // for submit data 
  onSubmit() {
    // let data={recordId:recordId,reason:reason}
     this.parentMsg.next()
    //  return this.parentMsg.asObservable()
    console.log(this.parentMsg);
    
  }
  onSubmitReturn(){
    return this.parentMsg.asObservable()
  }
  // for addNewItem 
  sidenavOpen(){
    this.sidenavFlag.next(true)
  }
  sidenavOpenReturn(){
    return this.sidenavFlag.asObservable()
  }
 
}
