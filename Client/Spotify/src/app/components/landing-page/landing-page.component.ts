import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  RestName = 'Takalani';

Menu1 = 'Meat Loaf';
Menu2 = 'Braai';
Menu3 = 'Pork Ribs';

  constructor() { }

  ngOnInit(): void {
  }

}
