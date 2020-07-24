import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <h3>ngStyle</h3>
      <app-ng-style></app-ng-style>

      <hr>
      <h3>CSS </h3>
      <app-css></app-css>

      <hr>
      <h3>efects </h3>
      <app-clases></app-clases>

      <hr>
      <h3>efects mouse</h3>
      <p [appResaltado]="'orange'">
          Hola Mundo
      </p>
      <hr>
      <h3>ngSwitch</h3>
      <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
