import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderControlService } from '../order-control';
import { QuestionBase } from '../order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [ OrderControlService ]
})
export class OrderDetailComponent implements OnInit{
  

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad='';
 
  constructor(private qcs:
    OrderControlService) { }

      ngOnInit(){
        this.form=
        this.qcs.toFormGroup(this.questions);
      }
      onSubmitOrder(){
        this.payLoad =
        JSON.stringify(this.form.value);
        console.log(this.form.value);
      }
    

}
