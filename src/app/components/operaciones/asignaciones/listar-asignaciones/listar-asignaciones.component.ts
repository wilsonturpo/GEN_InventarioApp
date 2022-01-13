import { Component, OnInit } from '@angular/core';
import { AdmUtilitarioService } from 'src/app/services/utilitario/adm-utilitario.service';
import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';


@Component({
  selector: 'app-listar-asignaciones',
  templateUrl: './listar-asignaciones.component.html',
  styleUrls: ['./listar-asignaciones.component.css']
})
export class ListarAsignacionesComponent implements OnInit {

  public asignaciones: Array<any> =[]
  public asignacionesConDatosExtras: Array<any> =[]

  //Medidas
  public medidasEstandar: Array<any> = []
  public medidasPersonalizadas: Array<any> = []

  constructor(
    private admUtilitarioService: AdmUtilitarioService,
    private admMaestroService: AdmMaestroService,
  ) {

    //Para obtener las medidas s/p
    this.admMaestroService.getAreaUso('002').subscribe((res:any)=>{
      this.medidasEstandar = res;
    })

    this.admMaestroService.getAreaUso('003').subscribe((res:any)=>{
      this.medidasPersonalizadas = res;
    })

    this.admUtilitarioService.getAsignaciones().subscribe((res:any)=>{
      this.asignaciones = res;
      this.asignacionesConDatosExtras = res;

      for(const asignacion in this.asignaciones){
        var codigoCampo = (this.asignaciones[asignacion].proD_IdProducto).substring(3,6)
        var medida = (this.asignaciones[asignacion].proD_IdProducto).substring(6,9)
        var unidad = (this.asignaciones[asignacion].proD_IdProducto).substring(9,12)
        //Para las asignaciones

        var seccionId = (this.asignaciones[asignacion].proD_IdProducto).substring(0,6)
        var medidaId = (this.asignaciones[asignacion].proD_IdProducto).substring(6,12)

        this.asignacionesConDatosExtras[asignacion].seccionId=seccionId;
        this.asignacionesConDatosExtras[asignacion].medidaId=medidaId;
        /*
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
        */

    }
    })
  }

  ngOnInit(): void {
  }

}
