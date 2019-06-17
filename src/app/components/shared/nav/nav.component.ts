import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  		$( document ).ready(function() {

		  if ($(window).width() < 992) {  

	       		$('.nav-link').click(function (){
			  		$('.navbar-toggler').click();
			  	});	
	              
	       }
	       
		});

		$("#logout").hide();

		$("#logout").click(function(){
			$("#logout").hide();
			$("#login").show();
		});
  		
  }

}
