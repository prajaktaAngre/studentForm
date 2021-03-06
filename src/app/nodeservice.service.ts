import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NodeserviceService {
  modalOpen$ = new BehaviorSubject<boolean>(false);

  open() {
    this.modalOpen$.next(true);
  }

  close() {
    this.modalOpen$.next(false);
  }
  constructor() { }
}
