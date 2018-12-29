import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './order-dropdown';
import { QuestionBase }     from './order';
import { TextboxQuestion }  from './order-text';

@Injectable()
export class QuestionService {

  getQuestions() {

    let questions: QuestionBase<any>[] = [

      
      new TextboxQuestion({
        key: 'orderName',
        label: 'Name',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'busName',
        label: 'Business (Optional)',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'orderEmail',
        label: 'E-mail',
        value: 'Practical@Example.com',
        type:'email',
        required: true,
        order: 3
      }),
      new TextboxQuestion({
        key: 'orderPhone',
        label: 'Phone',
        type: 'phone',
        order: 4,
        required: true,
      }),
     
      new DropdownQuestion({
        key: 'personOrder',
        label: 'Who is this Project for?',
        options: [
          {key: 'personal',  value: 'Personal'},
          {key: 'business',  value: 'Business/Commercial'},
          {key: 'org',   value: 'Charity, Non Profit, Other Organization'},
          {key: 'contract', value: 'Contract'},
          {key: 'other', value: 'Other'}
        ],
        required: true,
        order: 6
      }),
      new DropdownQuestion({
        key: 'projTypeOrder',
        label: 'Project Description',
        options: [
          {key: 'web',  value: 'Websites & Web Services'},
          {key: 'tools',  value: 'Tools, Productivity Apps, Automation'},
          {key: 'devops',   value: 'DevOps Software Development'},
          {key: 'infrastructure', value: 'Cloud Infrastructure Services'},
          {key: 'unk', value: 'Unknown'}
        ],
        required: true,
        order: 7
      }),
      new DropdownQuestion({
        key: 'startTimeOrder',
        label: 'Start Time',
        options: [
          {key: 'days',  value: 'Less than 1 Week'},
          {key: 'weeks',  value: '1 Week to Month'},
          {key: 'quarter',   value: 'Month to 3 Months'},
          {key: 'Year', value: '3 Months +'},
          {key: 'unk', value: 'Unknown'}
       
        ],
        required: true,
        order: 8
      }),
      new DropdownQuestion({
        key: 'finishtTimeOrder',
        label: 'Estimated Completion Length',
        options: [
          {key: 'days',  value: 'Less than 1 Week>'},
          {key: 'weeks',  value: '1 Week to Month'},
          {key: 'quarter',   value: 'Month to 3 Months'},
          {key: 'Year', value: '3 Months +'},
          {key: 'unk', value: 'Unknown'}
        ],
        required: true,
        order: 9
      }),
      new DropdownQuestion({
        key: 'budgetOrder',
        label: 'Project Budget',
        options: [
          {key: 'dollars',  value: 'Less $100'},
          {key: 'hundreds',  value: '$101 to $500'},
          {key: 'thousands',   value: '$501 to $1,000'},
          {key: 'multiThousands', value: '$1,001 to $5,000'},
          {key: 'excessThousands', value: '$5,001+'},
          {key: 'unk', value: 'Unknown'}
        ],
        required: true,
        order: 10
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}