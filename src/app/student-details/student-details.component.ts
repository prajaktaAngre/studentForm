import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TempServiceService } from '../shared/temp-service.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  subscription = new Subscription
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    genders: new FormControl(''),
    toppings: new FormControl(''),
    selectstate: new FormControl(''),
   
  });

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
  store: void;

  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(public msg:TempServiceService) { }

  ngOnInit(){
    }
  onSubmit() {
    console.log(this.profileForm.value)
    // console.log("hi",this.profileForm.value);
    this.msg.sendMsg.next(this.profileForm.value)
    console.log(this.send)
    
  }
  
  
  }
