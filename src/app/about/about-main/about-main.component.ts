import { Component, Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from 'src/app/models/services/service';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css']
})
export class AboutMainComponent {

  @Input() service: Service;
  
  closeResult: string;

  constructor(private leadService: NgbModal) {}

}
