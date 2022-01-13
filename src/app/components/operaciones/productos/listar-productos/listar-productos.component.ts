import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';
import { AdmProductoService } from 'src/app/services/producto/adm-producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  public productosData: Array<any> = []
  public productosDataAll: Array<any> = []
  public secciones: Array<any> = []
  public medidasEstandar: Array<any> = []
  public medidasPersonalizadas: Array<any> = []

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
    private router: Router
  ) {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing:true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };

    this.admMaestroService.getAreaUso('002').subscribe((res:any)=>{
      this.medidasEstandar = res;
    })

    this.admMaestroService.getAreaUso('003').subscribe((res:any)=>{
      this.medidasPersonalizadas = res;
    })

    this.admProductoService.getProductos().subscribe((resp:any)=>{
      this.productosData = resp;
      this.productosDataAll = resp;


      this.admMaestroService.getAreaUso('001').subscribe((res:any)=>{
        this.secciones = res;
        this.dtTrigger.next(null)
        for(const producto in this.productosData){
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
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  public onEdit(item:any){
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['operaciones/productos/edit'], this.navigationExtras);
  }

  public onDelete(item:any){
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['operaciones/productos/delete'], this.navigationExtras);
  }

}
