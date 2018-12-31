import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../models/services/service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit {
  ngOnInit(): void {}

  @Input() service: Service;

  constructor(private modalService: NgbModal) {}

  contactModal(web) {
    this.modalService.open(web, {backdropClass: 'light-blue-backdrop', centered:true, size:"lg"});
  }

}
