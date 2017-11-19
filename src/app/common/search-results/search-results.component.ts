import { Component, OnInit } from '@angular/core';
import { AjaxService } from './../../services/ajax.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  organizations;

  
  constructor(
    private ajxSvc: AjaxService
  ) { }
  initializeOrganizationData() {
    this.ajxSvc.getOrganizations().subscribe(
      (data) => {
        console.log(data);
        this.organizations = data.slice(0, 10);
      }, (err) => console.log(err.json())
    );
  }
  ngOnInit() {
    this.initializeOrganizationData();
  }

}
