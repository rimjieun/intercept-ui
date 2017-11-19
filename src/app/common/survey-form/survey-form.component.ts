import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {
  question = "What is your gender?";
  answers = []
  constructor() { }

  ngOnInit() {
  }

}
