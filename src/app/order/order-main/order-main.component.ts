import { Component } from '@angular/core';
import { QuestionService } from '../order.service';


@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.component.html',
  styleUrls: ['./order-main.component.css'],
  providers: [QuestionService]
})
export class OrderMainComponent  {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
   }


}
