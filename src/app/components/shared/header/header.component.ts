import { Component, OnInit } from '@angular/core';
import { slider,fader } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
  	slider
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet){
	return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
