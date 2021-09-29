import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  submitDataSend= new Subject();
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    stream: new FormControl('', Validators.required),
    hobbies: new FormControl(''),
    percentage:new FormControl(''),
    telephone:new FormControl('', ),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  submitted: boolean=false;
  constructor() { }
  onSubmit(recordId: any,reason: string) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    else {
      // if(this.editMode){
      //   this.profileForm.value['recordId'] = this.editData.recordId;
      // }

     
      console.log("lastIndex id",recordId);
      
      console.log (this.profileForm.value);
      // this.newItemEvent.emit(this.profileForm.value);
      //  console.log("newitemevent",this.newItemEvent)
      
      this.profileForm.reset()
      
     
     
      
    }

  }
}
