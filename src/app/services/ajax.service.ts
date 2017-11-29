import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AjaxService {
  mLabUrl = "https://api.mlab.com/api/1/databases/intercept/collections/"
  apiKey ="dNt29mbxqxK905XC1ZK1mcH60XkjR5gh";
  apiKeyString = "?apiKey=" + this.apiKey;

  interceptUrl = "interceptproject.org"

  private getMLabUrl(collection) {
    console.log(this.mLabUrl + collection + this.apiKeyString);
    return this.mLabUrl + collection + this.apiKeyString;
  }

  constructor(
    private http: Http) { }

  getOrganizations(): Observable<any> {
    let backup = this.getMLabUrl('organizations');
    return this.http.get(backup).map((res) => res.json());
    // return this.http.get(this.interceptUrl + '/organizations').map((res) => res.json());
  }

  getQuestions(): Observable<any> {
    let backup = this.getMLabUrl('questions');
    return this.http.get(backup).map((res: Response) => res.json());
    // return this.http.get(this.interceptUrl + "/questions").map((res: Response) => res.json());
  }

  submitSurvey(surveyData): Observable<any> {
    return this.http.post(this.interceptUrl + '/submitSurvey', surveyData).map((res: Response) => res.json());
  }
}
