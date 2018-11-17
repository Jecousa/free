import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from 'src/app/models/services/service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class HomeMainComponent {

  @Input() service: Service;
  
  closeResult: string;

  constructor(private leadService: NgbModal) {}

  leadModal(content) {
    this.leadService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

}
