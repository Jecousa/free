import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border',
  template: `
  <div class = 'main'>
    <p>
      border works!
    </p>
    </div>
  `,
  styles: [`
  .main{
    width: 3rem;
    background-color: black;
  }
  `]
})
export class BorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
