import { Component, OnInit, ViewChild} from '@angular/core';
import { Cartera} from '../../modals/Cartera';
import * as XLSX from 'xlsx';
import { CarteraService } from 'src/app/services/cartera.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.css']
})
export class CarteraComponent implements OnInit {

  @ViewChild("example") table;
  arrayBuffer:any;
  datatable:any;
  dtoptions:any;
  data:any;
	file:File;
  private listacarteras = new Array();

  constructor( public router: Router, public service: CarteraService) {
    this.dtoptions = {
      pageLength:25,
      scrollY : 400,
      scrollX : true,
      keys: true,
    }
  }

  ngOnInit() {
    $("#exceltable").hide();
    $("#spinner_cartera").hide();
    
    $("#btnsubirexcel").click(function(){
      $("#spinner_cartera").show();
    });

    $(".custom-file-input").on("change", function() {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

  }

    incomingfile(event) {
    	this.file= event.target.files[0]; 
  	}

  	Upload() {
          
  	      let fileReader = new FileReader();
  	        fileReader.onload = (e) => {
  	            this.arrayBuffer = fileReader.result;
  	            var data = new Uint8Array(this.arrayBuffer);
  	            var arr = new Array();
  	            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  	            var bstr = arr.join("");
  	            var workbook = XLSX.read(bstr, {type:"binary"});
  	            var first_sheet_name = workbook.SheetNames[1];
  	            var worksheet = workbook.Sheets[first_sheet_name];
  	            console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
  	            var htmlstr = XLSX.write(workbook,{sheet:first_sheet_name, type:'string',bookType:'html'});
  	            $('#exceltable tbody')[0].innerHTML = htmlstr;
  	            this.ValidarPrimeraFila();  
  	            this.GenerarEncabezado();
  	            this.ValidarContenidoFilas();
  	            $('#exceltable').show();
                $("#spinner_cartera").hide();
  	            this.listacarteras = this.PasstoCarteraArray();
  	            $('#exceltable').DataTable(this.dtoptions);
  	            //this.SelectedRow();
  	            //this.ColumnsHidden();
  	            console.log(this.listacarteras);
  	        }
  	        fileReader.readAsArrayBuffer(this.file);
  	}

	
  	ValidarPrimeraFila(){

  	  //alert($('#exceltable tbody').children('tr').eq(1).children('td').eq(0).text());
  	  
  	  if($('#exceltable tbody tr:first td:first').text() == ""){
  	    $('#exceltable tbody tr').first().remove();
  	  }
  	  if($('#exceltable tbody').children('tr').eq(1).children('td').eq(0).text() == ""){
  	    $('#exceltable tbody').children('tr').eq(1).children('td').remove();
  	  }
  	  
  	}

  	GenerarEncabezado(){
  	  $("#exceltable tbody tr:first td").each(function(indice,elemento){
  	    var elem = $(elemento);
  	    elem.replaceWith('<th>' + elem.html() + "</th>");
  	  });
  	  var a = $("#exceltable tbody tr:first");
  	  $("#exceltable thead").html(a);
  	  //$("#exceltable tbody tr:first").remove();
  	}

  	ValidarContenidoFilas(){
  	  $("#exceltable tbody tr").each(function(indice,elemento){
  	    let elem = $(elemento);
  	    if($(elem).children('td').eq(0).text()==""){
  	      $(elem).remove();
  	    }
  	  });
  	}

  	PasstoCarteraArray(): Cartera[]{
  	  var lista = new Array();
  	  $("#exceltable tbody tr").each(function(indice,elemento){
  	      let elem = $(elemento);
  	      let cartera = new Cartera();
  	      cartera.empresa = elem.children('td').eq(0).text();
  	      cartera.sucursal = elem.children('td').eq(1).text();
  	      cartera.ruc = elem.children('td').eq(2).text();
  	      cartera.codigo_sip = elem.children('td').eq(3).text();
  	      cartera.razon_social = elem.children('td').eq(4).text();
  	      cartera.direccion = elem.children('td').eq(5).text();
  	      //cartera.dist_legal = elem.children('td').eq(6).text();
  	      //cartera.dir_entrega = elem.children('td').eq(7).text();
  	      //cartera.dist_entrega = elem.children('td').eq(8).text();
  	      //cartera.clase = elem.children('td').eq(9).text();
  	      cartera.tipo_doc = elem.children('td').eq(10).text();
  	      cartera.factura = elem.children('td').eq(11).text();
  	      cartera.fecha_emi = elem.children('td').eq(12).text();
  	      cartera.fecha_venc = elem.children('td').eq(13).text();
  	      //cartera.dias = parseInt(elem.children('td').eq(14).text());
  	      //cartera.aging = elem.children('td').eq(15).text();
  	      cartera.moneda = elem.children('td').eq(16).text();
  	      cartera.importe_og = parseInt(elem.children('td').eq(17).text());
  	      //cartera.cobranza = parseInt(elem.children('td').eq(18).text());
  	      cartera.saldo_act = parseInt(elem.children('td').eq(19).text());
  	      cartera.saldo_equiv = parseInt(elem.children('td').eq(20).text());
  	      //cartera.soles = parseInt(elem.children('td').eq(21).text());
  	      //cartera.cond_pago_dias = parseInt(elem.children('td').eq(22).text());
  	      //cartera.cobrador = elem.children('td').eq(23).text();
  	      //cartera.vend_gases = elem.children('td').eq(24).text();
  	      //cartera.vend_mercaderia = elem.children('td').eq(25).text();

  	      /*
  	      if(elem.children('td').eq(26).text()=='VERDADERO'){
  	        cartera.disputa = true;
  	      }else{
  	        cartera.disputa = false;
  	      }

  	      if(elem.children('td').eq(27).text()=='VERDADERO'){
  	        cartera.legal = true;
  	      }else{
  	        cartera.legal = false;
  	      }

  	      if(elem.children('td').eq(28).text()=='VERDADERO'){
  	        cartera.castigo = true;
  	      }else{
  	        cartera.castigo = false;
  	      }

  	      if(elem.children('td').eq(29).text()=='VERDADERO'){
  	        cartera.provisionado = true;
  	      }else{
  	        cartera.provisionado = false;
  	      }

  	      cartera.motivo_disputa = elem.children('td').eq(30).text();
  	      cartera.motivo_castigo = elem.children('td').eq(31).text();
  	      */
		   
		  
  	      lista.push(cartera);
        
  	      //console.log(lista);
  	      //console.log(lista);
  	  });
  	    return lista;
  	}
	  onSubmit() {
		for (let cartera of this.listacarteras){
		this.service.createCustomer(cartera )
		  .subscribe(data => {
			
		  });
		}
	  }
}
