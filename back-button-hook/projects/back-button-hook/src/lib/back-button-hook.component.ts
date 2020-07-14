import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-back-button-hook',
  template: `
    <p>
      back-button-hook works!
    </p>
  `,
  styles: [
  ]
})
export class BackButtonHookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
