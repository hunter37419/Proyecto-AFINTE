import { Component, OnInit, ViewChild} from '@angular/core';
import { Cartera} from '../../modals/Cartera';
import { Empresa} from '../../modals/Empresa';
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
  private listaEmpresas = new Array();

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
  	            //console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
  	            var htmlstr = XLSX.write(workbook,{sheet:first_sheet_name, type:'string',bookType:'html'});
  	            $('#exceltable tbody')[0].innerHTML = htmlstr;
  	            this.ValidarPrimeraFila();  
  	            this.GenerarEncabezado();
  	            this.ValidarContenidoFilas();
  	            $('#exceltable').show();
                $("#spinner_cartera").hide();
  	            //this.listacarteras = this.PasstoCarteraArray();
                this.PasstoData();
  	            $('#exceltable').DataTable(this.dtoptions);
  	            //this.SelectedRow();
  	            //this.ColumnsHidden();
  	            //console.log(this.listacarteras);
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

  	PasstoData(){

  	  let lista_cartera = new Array();
      let lista_empresa = new Array();

      let lista_rucs = new Array();

  	  $("#exceltable tbody tr").each(function(indice,elemento){

  	      let elem = $(elemento);

          //Add new Cartera x Row
  	      let cartera = new Cartera();
  	      cartera.empresa = elem.children('td').eq(0).text();
  	      cartera.sucursal = elem.children('td').eq(1).text();
  	      cartera.ruc = elem.children('td').eq(2).text();
  	      cartera.codigo_sip = elem.children('td').eq(3).text();
  	      cartera.razon_social = elem.children('td').eq(4).text();
  	      cartera.direccion = elem.children('td').eq(5).text();
  	      cartera.tipo_doc = elem.children('td').eq(10).text();
  	      cartera.factura = elem.children('td').eq(11).text();
  	      cartera.fecha_emi = elem.children('td').eq(12).text();
  	      cartera.fecha_venc = elem.children('td').eq(13).text();
  	      cartera.moneda = elem.children('td').eq(16).text();
  	      cartera.importe_og = parseInt(elem.children('td').eq(19).text());
  	      cartera.saldo_act = parseInt(elem.children('td').eq(21).text());
		  cartera.saldo_equi = parseInt(elem.children('td').eq(22).text());
		  
		  
  	      lista_cartera.push(cartera);


          //Add new Empresa x Row (Repeats)
          let empresa = new Empresa();
          
          //Valido que los RUC no se repitan
          if( lista_rucs.indexOf(elem.children('td').eq(2).text()) < 0){
            lista_rucs.push( elem.children('td').eq(2).text() );

            empresa.ruc = elem.children('td').eq(2).text();
            empresa.nombre = elem.children('td').eq(4).text();
            empresa.dir_legal = elem.children('td').eq(5).text();
            empresa.dis_legal = elem.children('td').eq(6).text();
            empresa.dir_entrega = elem.children('td').eq(7).text();
            empresa.dis_entrega = elem.children('td').eq(8).text();
            lista_empresa.push(empresa);
          }
          
          
          
  	  });


        this.listacarteras = lista_cartera;
        this.listaEmpresas = lista_empresa;
        console.log(this.listacarteras);
        console.log(this.listaEmpresas);
  	    //return lista;
  	}

	  onSubmit() {
		for (let cartera of this.listacarteras){
		this.service.createCustomer(cartera )
		  .subscribe(data => {
			
		  });
		}
	  }
}
