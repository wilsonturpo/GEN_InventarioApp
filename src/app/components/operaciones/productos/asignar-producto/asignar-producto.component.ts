import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';
import { AdmUtilitarioService } from 'src/app/services/utilitario/adm-utilitario.service';
import { AdmProductoService } from 'src/app/services/producto/adm-producto.service';
import { Subject } from 'rxjs';

//Datatable
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-asignar-producto',
  templateUrl: './asignar-producto.component.html',
  styleUrls: ['./asignar-producto.component.css']
})
export class AsignarProductoComponent implements OnInit {

  //public productosResponse: Array<any> = []

  public productosData: Array<any> = []
  //public productosDataEjemplo: Array<any> = []


  public productosDataAll: Array<any> = []
  public secciones: Array<any> = []
  public medidasEstandar: Array<any> = []
  public medidasPersonalizadas: Array<any> = []

  public btnDisabled = false;
  public inputvalue = 0;


  //Formulario utilitario
  public form: FormGroup;

  //Formulario producto actualizado
  public formProduct: FormGroup;

  public dataEjemplo = [
       {
          "id": 3,
          "proD_Id": "001002002002",
          "proD_cDescripcion": "Tinta",
          "proD_mPrecio": 25.0000,
          "proD_nStock": 12,
          agencias:[
               {
                  cantidad: 0,
                  maeS_Id: 14,
                  maeS_cCabecera: true,
                  maeS_cCodigoCampo: "001",
                  maeS_cCodigoTabla: "004",
                  maeS_cDescripcion: "Agencia",
                  maeS_cDescripcionCampo: "Sede Arequipa"
               },
               {
                  cantidad: 0,
                  maeS_Id: 18,
                  maeS_cCabecera: null,
                  maeS_cCodigoCampo: "002",
                  maeS_cCodigoTabla: "004",
                  maeS_cDescripcion: "Agencia",
                  maeS_cDescripcionCampo: "Lima"
               }
           ]
      },
      {
          "id": 2,
          "proD_Id": "001001002002",
          "proD_cDescripcion": "Lapiceros pilot",
          "proD_mPrecio": 2.5000,
          "proD_nStock": 150,
          agencias:[
               {
                  cantidad: 0,
                  maeS_Id: 14,
                  maeS_cCabecera: true,
                  maeS_cCodigoCampo: "001",
                  maeS_cCodigoTabla: "004",
                  maeS_cDescripcion: "Agencia",
                  maeS_cDescripcionCampo: "Sede Arequipa"
               },
               {
                  cantidad: 0,
                  maeS_Id: 18,
                  maeS_cCabecera: null,
                  maeS_cCodigoCampo: "002",
                  maeS_cCodigoTabla: "004",
                  maeS_cDescripcion: "Agencia",
                  maeS_cDescripcionCampo: "Lima"
               }
           ]
      },
      {
          "id": 1,
          "proD_Id": "001001002001",
          "proD_cDescripcion": "Plumones",
          "proD_mPrecio": 2.5000,
          "proD_nStock": 12,
          agencias:[
               {
                  cantidad: 0,
                  maeS_Id: 14,
                  maeS_cCabecera: true,
                  maeS_cCodigoCampo: "001",
                  maeS_cCodigoTabla: "004",
                  maeS_cDescripcion: "Agencia",
                  maeS_cDescripcionCampo: "Sede Arequipa"
               },
               {
                  cantidad: 0,
                  maeS_Id: 18,
                  maeS_cCabecera: null,
                  maeS_cCodigoCampo: "002",
                  maeS_cCodigoTabla: "004",
                  maeS_cDescripcion: "Agencia",
                  maeS_cDescripcionCampo: "Lima"
               }
           ]
      }
  ]

  //Agencias
  public agenciasData: Array<any> = []
  public agenciasDataAll: Array<any> = []

  //Asignación de material

  //Datatable
  //dtElement: DataTableDirective;
  //isDtInitialized:boolean = false;



  dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(
    private admProductoService: AdmProductoService,
    private admMaestroService: AdmMaestroService,
    private admUtilitarioService: AdmUtilitarioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {


  }

  ngOnInit(): void {
    /*
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing:true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    */

    //Formulario de utilitario
    this.form = this.formBuilder.group({
      UTIL_cSeccion: [''],
      UTIL_cUnidadMedida: [''],
      UTIL_cAgencia: [''],
      PROD_IdProducto: [''],
      UTIL_nCantidadProducto:['']
    })

    this.formProduct = this.formBuilder.group({
      PROD_Id: [''],
      PROD_cDescripcion: [''],
      PROD_mPrecio: [''],
      PROD_nStock: [''],
      Id:['']
    })


    this.admMaestroService.getAreaUso('004').subscribe((res:any)=>{
      this.agenciasData = res;
      this.agenciasDataAll = this.agenciasData.map(obj=>({...obj,cantidad:0}))
      //console.log(this.agenciasDataAll);

      this.admMaestroService.getAreaUso('002').subscribe((res:any)=>{
        this.medidasEstandar = res;
      })

      this.admMaestroService.getAreaUso('003').subscribe((res:any)=>{
        this.medidasPersonalizadas = res;
      })

      this.admProductoService.getProductos().subscribe((resp:any)=>{
        //this.productosResponse = resp;
        this.productosData = resp;

        //this.productosDataEjemplo = this.productosResponse.map(obj=>({...obj, agencias: this.agenciasDataAll}))
        this.productosDataAll = this.productosData.map(obj=>({...obj, agencias: this.agenciasDataAll, btnDisabled:true}))
        //console.log(this.productosDataEjemplo)
        //this.productosDataAll = resp;

        //Results.map(obj=> ({ ...obj, Active: 'false' }))

        this.admMaestroService.getAreaUso('001').subscribe((res:any)=>{
          this.secciones = res;

          //this.dtTrigger.next(null)
          for(const producto in this.productosData){

            //this.productosDataAll[producto].agencias = this.agenciasDataAll;

            var codigoCampo = (this.productosData[producto].proD_Id).substring(3,6)
              var medida = (this.productosData[producto].proD_Id).substring(6,9)
              var unidad = (this.productosData[producto].proD_Id).substring(9,12)
              //Para las asignaciones
              var seccionId = (this.productosData[producto].proD_Id).substring(0,6)
              var medidaId = (this.productosData[producto].proD_Id).substring(6,12)

              this.productosDataAll[producto].seccionId=seccionId;
              this.productosDataAll[producto].medidaId=medidaId;

              //var seccionProducto;
              for (const i in this.secciones) {
                if(this.secciones[i].maeS_cCodigoCampo === codigoCampo){
                  this.productosDataAll[producto].seccion = this.secciones[i].maeS_cDescripcionCampo;
                }
              }

              //MEDIDAS
              if(medida == '002'){

                  for (const i in this.medidasEstandar) {
                    if(this.medidasEstandar[i].maeS_cCodigoCampo === unidad){
                      this.productosDataAll[producto].medida = this.medidasEstandar[i].maeS_cDescripcionCampo;
                    }
                  }
              }else if(medida == '003'){
                for (const i in this.medidasPersonalizadas) {

                  if(this.medidasPersonalizadas[i].maeS_cCodigoCampo === unidad){
                    this.productosDataAll[producto].medida = this.medidasPersonalizadas[i].maeS_cDescripcionCampo;
                  }
                }
              }


          }

        })



      })



    })
    /*
    if (this.isDtInitialized) {
      this.dtElement.dtInstance.then((dtElement: DataTables.Api) => {
        dtElement.destroy();
        this.dtTrigger.next(null);
      });
    } else {
      this.isDtInitialized = true
      this.dtTrigger.next(null);
    }
    */

  }
  /*
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  */

  public onEdit(item:any){
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['operaciones/productos/edit'], this.navigationExtras);
  }

  public onDelete(item:any){
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['operaciones/productos/delete'], this.navigationExtras);
  }

  public enviarData(event:any,item:any){
    var nuevoStock = item.proD_nStock;
    var cantidadTotal = 0;
    //this.dataEjemplo[0].agencias[0].cantidad = 100;
    //this.productosDataEjemplo[0].agencias[0].cantidad = 10

    //console.log((this.productosDataEjemplo))
    //console.log((this.dataEjemplo))
    console.log(item)


    for(let i=0; i<item.agencias.length; i++){

      cantidadTotal = cantidadTotal + parseInt(item.agencias[i].cantidad)

    }

    if(cantidadTotal > item.proD_nStock){

      window.alert("Los montos introducidos superan al stock");

    }else if(cantidadTotal <= item.proD_nStock){

      for(let i=0; i<item.agencias.length; i++){

        this.form.patchValue({
          UTIL_cSeccion: item.seccionId,
          UTIL_cUnidadMedida:item.medidaId,
          UTIL_cAgencia: item.agencias[i].maeS_cCodigoTabla+ item.agencias[i].maeS_cCodigoCampo,
          PROD_IdProducto:item.id,
          UTIL_nCantidadProducto:item.agencias[i].cantidad
        })

        this.admUtilitarioService.createUtilitarioData(this.form.value)
        .subscribe(resp=>{
          console.log(resp);
        })

        nuevoStock = nuevoStock - parseInt(item.agencias[i].cantidad)

      }

      this.formProduct.patchValue({
        PROD_Id: item.proD_Id,
        PROD_cDescripcion: item.proD_cDescripcion,
        PROD_mPrecio: item.proD_mPrecio,
        PROD_nStock: nuevoStock,
        Id:item.id
      })

      this.admProductoService.editProductotData(
        this.formProduct.value['Id'],
        this.formProduct.value
      ).subscribe(res=>{

        this.ngOnInit()
        //this.router.navigate(['/operaciones/productos/asignar']);
      })
    }

  }

  public onInputClick(event:Event, item:any, ind:any, i:any){
    const val =  event.target as HTMLInputElement;
    //console.log(ind + '-' + i)
    //console.log(event)
    //value="{{item.agencias[i].cantidad}}"

    for (let i = 0; i < this.productosDataAll.length; i++) {

      if(this.productosDataAll[i] !== ind){
        this.productosDataAll[i].btnDisabled=true
        /*
        for(let idx = 0; idx < this.productosDataAll[i].agencias.length; idx++){
          this.productosDataAll[i].agencias[idx].cantidad = 0
        }
        */
      }


    }

    item.btnDisabled=false;

    console.log(val.value);

  }

  public changeQuantity(event:Event, item:any, ind:any, indic:any){
    const val =  event.target as HTMLInputElement;

    item.agencias[indic].cantidad = val.value;
    console.log("Value: ", val.value)

    //console.log(i)
    //console.log(item)

    /*
    for (let i = 0; i < this.productosDataAll.length; i++) {
      if(this.productosDataAll[i].id == item.id){
        this.productosDataAll[i].agencias[indic].cant = val.value;
      }
    }
    */

    //item.agencias[0].cantidad = val.value;



  }
}
