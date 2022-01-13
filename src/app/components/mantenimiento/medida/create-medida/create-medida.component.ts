import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-create-medida',
  templateUrl: './create-medida.component.html',
  styleUrls: ['./create-medida.component.css']
})
export class CreateMedidaComponent implements OnInit {


  //Tipo de medida
  public tipoMedidaSeleccionado: string='Hola Mundo';
  public crearMedidaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private admMaestroService: AdmMaestroService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.crearMedidaForm = this.formBuilder.group({
      medI_cTipo : [''],
      medI_cDescripcion: ['']
    })

  }

  onTipoMedidaChange(val:string){
    this.tipoMedidaSeleccionado = val;
  }

  public crearMedida(){
    this.crearMedidaForm.patchValue({
      medI_cTipo: this.tipoMedidaSeleccionado
    })
    console.log(this.crearMedidaForm.value);
    this.admMaestroService.agregarMedida(this.crearMedidaForm.value)
      .subscribe(resp =>{
        this.router.navigate(['main-page/mantenimiento/maestro']);
      })
  }

}
