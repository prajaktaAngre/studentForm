import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-sidenav-form',
  templateUrl: './sidenav-form.component.html',
  styleUrls: ['./sidenav-form.component.scss']
})
export class SidenavFormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();//send data of onsubmit method
  @Input()  editData:any;   //catched data from edited mode on
  @Input() editMode=false; //for switch on updte mode
  @ViewChild('closebutton') closebutton:any;
  
  @Input() opened:boolean=true;
  
  @Output() sidenav = new EventEmitter(); 
  reason = '';
  @ViewChild('drawer')
  MatDrawer!: MatDrawer;
  close(reason: string) {
    this.reason = reason;
    this.MatDrawer.close();
  }
  toggle:boolean = false;
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
    telephone:new FormControl('', ),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  submitted=false;
  recordId: number =0;
  percentage=65;
  // reason = '';
  // @ViewChild('drawer')
  // MatDrawer!: MatDrawer;
  // close(reason: string) {
  //   this.reason = reason;
  //   this.MatDrawer.close();
  // }
 
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }

    return value;
  }
 

  // methods
  

  onSubmit(recordId: any,reason: string) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    else {
      if(this.editMode){
        this.profileForm.value['recordId'] = this.editData.recordId;
      }

     
      console.log("lastIndex id",recordId);
      
      // this.profileForm.value['recordId'] = this.recordId;
      console.log (this.profileForm.value);
      this.newItemEvent.emit(this.profileForm.value);
       console.log("newitemevent",this.newItemEvent)
      
      this.profileForm.reset()
      // this.closebutton.nativeElement.click();
      // this.onClose.emit();
      // this.newItemEvent.closed;
      // this.sidenav.close()
      this.opened=false
      console.log(this.opened);
      this.sidenav.emit(value);
      console.log(this.sidenav);
      console.log('Clicked');
      this.toggle = !this.toggle;
      console.log('Clicked',this.toggle);
      this.reason = reason;
      // this.MatDrawer.close();
      
    }

  }
 
  
  get f() { return this.profileForm.controls; }
  ngOnChanges() {
    console.log('edited data came for updation', this.editData);
    this.profileForm.patchValue(this.editData)
    console.log(this.profileForm);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
function value(value: any) {
  throw new Error('Function not implemented.');
}

