import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form1';
  id: any;
  students: any = [];
  data: any;
  modeOn = false;
  updatedValues = [];
  items: any = []
  subscription: any;
  send: any;
  in: any;
  dataSource: any;
  addItem(newItem: any) {
    // this.items.push(newItem);
    console.log("newItem", newItem)
    console.log("myitems", this.students)
    if (this.dataSource && this.modeOn === true) {
      const recordIndex = this.dataSource.findIndex((object: any) =>
        object.recordId == newItem.recordId
      )

      console.log("myid", this.id);
      this.dataSource.splice(recordIndex, 1, newItem);
      console.log("dataSource", this.dataSource)

    }
    else {
      this.items.push(newItem);
      console.log("newItem", newItem)
    }


  }
}
