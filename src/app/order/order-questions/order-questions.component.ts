import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../order';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-questions',
  templateUrl: './order-questions.component.html',
  styleUrls: ['./order-questions.component.css']
})
export class OrderQuestionsComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
