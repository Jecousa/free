import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

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
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

}
