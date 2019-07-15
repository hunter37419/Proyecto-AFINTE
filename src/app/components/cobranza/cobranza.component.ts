import { Component, OnInit, ViewChild } from '@angular/core';
import { Cobranza } from '../../modals/Cobranza';
import * as XLSX from 'xlsx';
import { CobranzaService } from 'src/app/services/cobranza.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-cobranza',
  templateUrl: './cobranza.component.html',
  styleUrls: ['./cobranza.component.css']
})
export class CobranzaComponent implements OnInit {

  @ViewChild("example") table;
  arrayBuffer:any;
  datatable:any;
  dtoptions:any;
  data:any;
	file:File;
  private listacobranza = new Array();

  constructor(public router: Router, public service: CobranzaService) {
    this.dtoptions = {
      pageLength:25,
      scrollY : 400,
      scrollX : true,
      keys: true,
    }
  }

  ngOnInit() {
    $("#exceltable").hide();
    $("#spinner_cobranza").hide();
    
    $("#btnsubirexcel").click(function(){
      $("#spinner_cobranza").show();
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
                $("#spinner_cobranza").hide();
  	            this.listacobranza = this.PasstoCobranzaArray();
  	            $('#exceltable').DataTable(this.dtoptions);
  	            //this.SelectedRow();
  	            //this.ColumnsHidden();
  	            console.log(this.listacobranza);
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

  	PasstoCobranzaArray(): Cobranza[]{
  	  var lista = new Array();
  	  $("#exceltable tbody tr").each(function(indice,elemento){
  	      let elem = $(elemento);
  	      let cobranza = new Cobranza();
  	      cobranza.cliente = elem.children('td').eq(4).text();
          cobranza.sucursal = elem.children('td').eq(5).text();
          cobranza.cod_cliente = parseInt(elem.children('td').eq(3).text());
  	      cobranza.banco = elem.children('td').eq(1).text();
          cobranza.factura = elem.children('td').eq(16).text();
          cobranza.monto_fact_ind = parseFloat(elem.children('td').eq(17).text());
          cobranza.fecha_trans = elem.children('td').eq(21).text();
          cobranza.fecha_depo = elem.children('td').eq(5).text();
          cobranza.depo_total = parseFloat(elem.children('td').eq(9).text());
  	      cobranza.estado = elem.children('td').eq(22).text();

  	      lista.push(cobranza);
  	  });
  	    return lista;
  	}
	  onSubmit() {
		for (let cobranza of this.listacobranza){
		this.service.createCobranza(cobranza)
		  .subscribe(data => {
			
		  });
		}
	  }
}
