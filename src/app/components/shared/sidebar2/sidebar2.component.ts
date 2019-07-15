import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  constructor() { }

  ngOnInit() {

  	$('.nav-item').click(function(){
  		$('.nav-item').removeClass('active');
  		$(this).addClass('active');
  	});

  	$('#btn-nav-toggle').click();

  	function ToggleSidebar2(){

  	}


  }

}
