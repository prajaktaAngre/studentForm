import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidenav-form',
  templateUrl: './sidenav-form.component.html',
  styleUrls: ['./sidenav-form.component.scss']
})
export class SidenavFormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();//send data of onsubmit method
  @Input()  editData:any;   //catched data from edited mode on
  @Input() editMode=false; //for switch on updte mode
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
    percentage:new FormControl(''),
    
  });
  submitted=false;
  recordId: number =0;
  percentage=65;
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }

    return value;
  }
  


  // methods
  onSubmit(recordId: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    else {

      this.recordId = this.recordId + 1;
      this.profileForm.value['recordId'] = this.recordId;
      console.log (this.profileForm.value);
      this.newItemEvent.emit(this.profileForm.value);
       console.log("newitemevent",this.newItemEvent)
     
      this.profileForm.reset()
    }

  }
  get f() { return this.profileForm.controls; }
  ngOnChanges() {
    console.log('edited data came for updation', this.editData);
    this.profileForm.patchValue(this.editData)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
function value(value: any) {
  throw new Error('Function not implemented.');
}

