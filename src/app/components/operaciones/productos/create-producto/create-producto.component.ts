import { Component, OnInit } from '@angular/core';
import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';
import { AdmProductoService } from 'src/app/services/producto/adm-producto.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {

  public categoriasDatoMaestro: Array<any> = [];
  public unidadMedida:String;

  public secciones: Array<any> = [];
  public medidas: Array<any> = [];

  public form: FormGroup;

  public prodId: String = "001";

  public seccionOpcion: String;
  public medida: String;

  constructor(
    private admMaestroService: AdmMaestroService,
    private admProductoService: AdmProductoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.admMaestroService.getMaestroscategorias().subscribe((res:any)=>{
      this.categoriasDatoMaestro = res;
    });
  }

  ngOnInit(): void {

    this.admMaestroService.getAreaUso('001').subscribe((res:any)=>{
      this.secciones = res;
    })

    this.form = this.formBuilder.group({
      proD_Id: [''],
      proD_cDescripcion: [''],
      proD_mPrecio: [''],
      proD_nStock: ['']
    })

  }

  public onSeccionOpcionChange(val:string){
    this.seccionOpcion=val;
  }

  //public prodIdAux:String = this.prodId;

  public onUnidadChange(val:string){
    this.unidadMedida=val;
    if(val === '002'){
      this.admMaestroService.getAreaUso('002').subscribe((res:any)=>{
        this.medidas = res;
      })
    }else{
      this.admMaestroService.getAreaUso('003').subscribe((res:any)=>{
        this.medidas = res;
      })
    }
  }

  public onMedidaChange(val:string){
    this.medida=val;
  }


  public async enviarData(){
    this.form.patchValue({
      proD_Id: '001'+this.seccionOpcion+this.unidadMedida+this.medida
    })
    console.log(this.form.value)

    this.admProductoService.createProducto(
      this.form.value
      )
    .subscribe(resp =>{

      this.router.navigate(['/operaciones/productos']);
    })

  }
}
