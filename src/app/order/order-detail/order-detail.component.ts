import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

//   times: string[] = ['Less Than 1 Week','2 to 4 Weeks','Within 3 Months',
//   'Greater 3 Months','Unknown Start Time'];
  
// timeForm: FormGroup;

//   orderform = new FormGroup({
//     orderName: new FormControl(''),
//     orderBus: new FormControl(''),
//     orderEmail: new FormControl(''),
//     orderPhone: new FormControl(''),
//     // orderStart: new FormControl(''),
//     orderFinish: new FormControl(''),
//     orderPersonal: new FormControl(''),
//     orderOrg: new FormControl(''),
//     orderContract: new FormControl(''),
//     orderOther: new FormControl('')
//   });

 
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
