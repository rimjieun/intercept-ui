import { Component, OnInit } from '@angular/core';
import { NavService } from './services/nav.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entered: boolean = false;
  navSub: Subscription;

  constructor(
    private navSvc: NavService
  ) { }
  
  ngOnInit() {
    this.navSub = this.navSvc.navReposit().subscribe(
      (data) => {
        console.log('open!');
        this.entered = true;
      }, (err) => console.log(err)
    );
  }
}
