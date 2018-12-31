import { Component } from '@angular/core';
import { Contact } from './contact';



@Component({
  selector: 'app-contact-form',
  template:``

})
export class ContactFormComponent {

  contacts = ['Product/Service Questions', 'Customer Service',
            'General Inquiry', 'Other'];

  model = new Contact(this.contacts[0], 'test', 'test', 'test', 'test');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}