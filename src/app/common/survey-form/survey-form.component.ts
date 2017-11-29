import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AjaxService } from './../../services/ajax.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {
  templateType: string;
  isSubmitReady: boolean = false;
  isEmergency: boolean = false;
  questions = [];

  question;
  answer;
  address = {
    street: "",
    city: "",
    state: "",
    zipcode: ""
  };
  tags = [];

  constructor(private ajxSvc: AjaxService) { }

  ngOnInit() {
    this.initializeSurveyData();
  }

  initializeSurveyData() {
    this.ajxSvc.getQuestions().subscribe(
      (data) => {
        this.questions = data;
        console.log(this.questions);
        this.loadQuestion(101);
      }, (err) => console.log(err)
    );
  }

  loadQuestion(qID: number) {
    console.log(qID);
    this.isEmergency = this.checkEmergency(qID);
    if (!this.isEmergency) {
      let notFound = true;
      for (let i = 0; i < this.questions.length; i++) {
        if (this.questions[i].questionID == qID) {
          this.question = this.questions[i];
          console.log(this.question);
          this.selectTemplate(this.question.questionType);
          notFound = false;
        }
      }
      if (notFound) {
        this.isSubmitReady = true;
      }
    }
  }

  checkEmergency(qID: number) {
    if (qID == 911) {
      return true;
    }
    return false;
  }

  selectTemplate(type: string) {
    this.templateType = type;
  }

  selectOption(index) {
    this.answer = this.question.answerPossibilities[index];
    console.log(this.answer);
    if (this.answer.nextQID == 0) {
      this.isSubmitReady = true;
    }
  }

  prev() {
    console.log('previous!');
  }

  next() {
    if (this.templateType == 'text') {
      this.answer = this.question.answerPossibilities[0];
      if (this.address.city == '') {
        alert('Please enter city');
        return false;
      }
      if (this.address.state == '') {
        alert('Please enter state');
        return false;
      }
      if (this.address.city !== '' && this.address.state !== '') {
        console.log('ok');
        console.log(this.address);
      }
    }
    this.addTags(this.answer.tags);
    this.loadQuestion(this.answer.nextQID);
  }

  addTags(newTags) {
    for (let i = 0; i < newTags.length; i++) {
      let dupes = this.tags.filter(tag => tag == newTags[i]);
      if (dupes.length == 0) {
        this.tags.push(newTags[i]);
      }
    }
    console.log(this.tags);
  }

  submit() {
    let survey = {
      location: this.address.street + "," + this.address.city + "," + this.address.state + "," + this.address.zipcode,
      services: this.tags
    };
    console.log(survey);
    // this.ajxSvc.submitSurvey(survey).subscribe(
    //   (data) => console.log(data),
    //   (err) => console.log(err)
    // );

  }

}
