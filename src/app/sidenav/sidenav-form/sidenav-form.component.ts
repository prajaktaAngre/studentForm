import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidenav-form',
  templateUrl: './sidenav-form.component.html',
  styleUrls: ['./sidenav-form.component.scss']
})
export class SidenavFormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();//send data of onsubmit method

  showFiller = false;
  favoriteStream=[];
  streams: string[] = ['Computer', 'Mechanical', 'Electrical', 'IT'];
  selected= ['coding'];
     columns = [{value:'reading stories',label:'reading stories'},
                      {value:'writting blogs',label:'writting blogs'},
                      {value:'gyming',label:'gyming'},
                      {value:'coding',label:'coding'}];
  modeOn: boolean = true;
  userOptions='';
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    stream: new FormControl('', Validators.required),
    hobbies: new FormControl(''),
    
  });
  submitted=true;
  position: number = 5;
  // methods
  onSubmit(position: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    else {

      this.position = this.position + 1;
      this.profileForm.value['position'] = this.position;
      console.log (this.profileForm.value);
      this.newItemEvent.emit(this.profileForm.value);
       console.log("newitemevent",this.newItemEvent)
     
      this.profileForm.reset()
    }

  }
  get f() { return this.profileForm.controls; }
 
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    console.log("newitemevent",this.newItemEvent)


  }
  constructor() { }

  ngOnInit(): void {
  }

}
function value(value: any) {
  throw new Error('Function not implemented.');
}

