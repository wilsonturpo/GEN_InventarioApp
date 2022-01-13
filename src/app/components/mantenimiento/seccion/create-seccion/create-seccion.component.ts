import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-seccion',
  templateUrl: './create-seccion.component.html',
  styleUrls: ['./create-seccion.component.css']
})
export class CreateSeccionComponent implements OnInit {

  //Tipo de medida
  public tipoMedidaSeleccionado: string='Hola Mundo';
  public crearSeccionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.crearSeccionForm = this.formBuilder.group({
      medI_cTipo : [''],
      medI_cDescripcion: ['']
    })
  }

  onTipoMedidaChange(val:string){
    this.tipoMedidaSeleccionado = val;
  }

  public crearSeccion(){
    this.crearSeccionForm.patchValue({
      medI_cTipo: this.tipoMedidaSeleccionado
    })
  }
}
