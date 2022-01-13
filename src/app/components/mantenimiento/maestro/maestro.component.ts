import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IMedida } from 'src/app/Modelos/IMedida';
import { ISeccion } from 'src/app/Modelos/ISeccion';
import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';
@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})

export class MaestroComponent implements OnDestroy, OnInit {

  //Entidades maestras
  public seccionesData: ISeccion[]=[];
  public medidasData: IMedida[]=[];

  dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(
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

      this.admMaestroService.getSecciones().subscribe(
        data => {
        this.seccionesData = data;
      })

      this.admMaestroService.getMedidas().subscribe(
        data => {
        this.medidasData = data;
        this.dtTrigger.next(null)
      })

   }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  public onGotoEdit(item: any){
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['mantenimiento/maestro/edit'], this.navigationExtras);
  }

  public onGotoDelete(item: any){
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['mantenimiento/maestro/delete'], this.navigationExtras);
  }

}
