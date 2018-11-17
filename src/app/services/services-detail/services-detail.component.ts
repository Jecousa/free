import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../models/services/service';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit {
  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}
