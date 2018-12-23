import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderQuestionsComponent } from './order-questions.component';

describe('OrderQuestionsComponent', () => {
  let component: OrderQuestionsComponent;
  let fixture: ComponentFixture<OrderQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
