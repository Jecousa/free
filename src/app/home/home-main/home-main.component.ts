import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class HomeMainComponent {

  closeResult: string;

  constructor(private leadService: NgbModal) {}

  leadModal(content) {
    this.leadService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

}
