import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertComponent } from './../common/alert/alert.component';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  modalRef: BsModalRef;
  title: string;
  instruction: string;

  constructor(
    private modalSvc: BsModalService) { }

  ngOnInit() {
    console.log('guide');
    this.initialize();
  }

  initialize() {
    this.modalRef = this.modalSvc.show(AlertComponent);
    this.modalRef.content.title = "Alert!";
    this.modalRef.content.instruction = "If you are currently, ... call 911";
  }

  openModal() {
    this.modalRef = this.modalSvc.show(AlertComponent);
    this.modalRef.content.title = "We are here to help you";
    this.modalRef.content.instruction = "Please answer the following questions";
  }

}
