import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	$('.nav-item').click(function(){
  		$('.nav-item').removeClass('active');
  		$(this).addClass('active');
  	});

  	$('#btn-nav-toggle').click();

  	function ToggleSidebar(){

  	}


  }

}
