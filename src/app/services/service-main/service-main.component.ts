import { Component, OnInit, Directive } from '@angular/core';
import { SERVICES } from '../../models/services/service-list';
import { Service } from '../../models/services/service';

@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.css']
})

export class ServiceMainComponent {

  services = SERVICES;
  selectedService: Service;

  constructor() { }
  
  onSelect(service: Service): void {
    this.selectedService = service;
  }
}
