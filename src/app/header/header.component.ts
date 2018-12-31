import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Contact } from '../contact/contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  contactModal(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop',centered:true, size:"lg"});
  }

  contacts = ['Product/Service Questions', 'Customer Service',
            'General Inquiry', 'Other', "tester"];

  model = new Contact(this.contacts[0], 'test', 'test', 'test', 'test');

  submitted = false;

  onSubmit(contactForm: NgForm) { 
    console.log(Contact);
    this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

