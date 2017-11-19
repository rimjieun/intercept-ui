import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
@Injectable()
export class NavService {
  constructor() { }
  private navSub = new ReplaySubject<any>(1);
  navReposit() {
    return this.navSub.asObservable();
  }
  openNav(data) {
    this.navSub.next(data);
  }
}