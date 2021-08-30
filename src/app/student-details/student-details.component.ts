import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TempServiceService } from '../shared/temp-service.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit ,OnChanges{
  @Input()data:any={}
  @Input() editMode :boolean=true;
  @Input() changeUpdateValue:any;
  @Output() newItemEvent = new EventEmitter;
  editToupdate:any;
  email = new FormControl('', [Validators.required, Validators.email]);
  subscription = new Subscription
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    genders: new FormControl(''),
    toppings: new FormControl(''),
    selectstate: new FormControl(''),
   
  });
ngOnChanges(){
   console.log('student comp data',this.data);
// console.log(this.temp);

this.profileForm.patchValue(this.data)
}
  toppings = new FormControl();
  toppingList: string[] = ['FY', 'SY', 'TY', 'BE', 'B.Tech'];
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'India', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  send: any;
  rows: any;
  
  

  getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(public msg:TempServiceService) { }

  ngOnInit(){
    console.log(this.data);
    
    }
  onSubmit() {
     if(this.editMode){
     console.log("updated",this.profileForm.value);   
    //   this.profileForm = new FormGroup({
    //   name: new FormControl('',[]),
    //   email: new FormControl(''),
    //   genders: new FormControl(''),
    //   toppings: new FormControl(''),
    //   selectstate: new FormControl(''),
    
    // })
     
     this.profileForm.reset()
    }
    else{
    console.log(this.profileForm.value)
    this.msg.sendMsg.next(this.profileForm.value)
    console.log(this.send)
    this.profileForm.reset()
    }
    
  }
  addNewItem() {
    this.newItemEvent.emit();
  }
  // onUpdate(profileForm: { value: any; reset: () => void; }) {
  //   let values = profileForm.value;
  //   console.log(values);
  //   let obj: any = {
  //     studentId: values.id,
  //     name: values.name,
  //     state: values.salary,
  //     abc: values.department
  //   };

  //   this.rows.push(obj);
  //   profileForm.reset();

  // }
  
  
  }
  
// function result(result: any) {
//   throw new Error('Function not implemented.');
// }


