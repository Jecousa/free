import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  encapsulation: ViewEncapsulation.None,

  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent {

  constructor(private modalService: NgbModal) {}

  contactModal(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

}
