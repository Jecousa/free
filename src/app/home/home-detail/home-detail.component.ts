import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/services/service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  ngOnInit(): void {  }

  @Input() service: Service;
  
  closeResult: string;

  constructor(private leadService: NgbModal) {}

  leadModal(content, serviceMain) {
    this.leadService.open(content, {backdropClass: 'light-blue-backdrop'});
    this.leadService.open(serviceMain, {backdropClass: 'light-blue-backdrop'});

  }

}
