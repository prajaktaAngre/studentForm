import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {
  sendMsg= new Subject();
  constructor() { }
}
