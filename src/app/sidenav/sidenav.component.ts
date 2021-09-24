import { Component, OnInit } from '@angular/core';
export interface student {
  name: string;
  position: number;
  stream: string;
  hobbie: string;
}

const ELEMENT_DATA: student[] = [
  {position: 1, name: 'Swarali', stream: 'Computer Science', hobbie: 'Cricket'},
  {position: 2, name: 'Shweta', stream: 'Mechanical', hobbie: 'Dance'},
  {position: 3, name: 'Sayali', stream: 'BCS Science', hobbie: 'Singing'},
  {position: 4, name: 'Bela', stream: 'Electrical', hobbie: 'Ludo'},
  {position: 5, name: 'Boron', stream:'Computer Science', hobbie: 'Basketboll'},
]
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'stream', 'hobbie'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
