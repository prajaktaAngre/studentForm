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
  onSubmit(profileForm:any) {
    // let data={profileForm}
    console.log(profileForm);
    
     this.parentMsg.next(profileForm)
    //  return this.parentMsg.asObservable()
    console.log(this.parentMsg);
    
  }
  onSubmitReturn():Observable<any>{
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
