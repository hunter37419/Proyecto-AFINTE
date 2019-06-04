import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$("#form-login").submit(function(){
  		
  		

  	});
  }

}