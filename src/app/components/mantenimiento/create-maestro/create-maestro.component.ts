import { Component, OnInit } from '@angular/core';
import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface CategoriaMaesto{
  maeS_cCodigoTabla: string,
  maeS_cDescripcion: string
}

@Component({
  selector: 'app-create-maestro',
  templateUrl: './create-maestro.component.html',
  styleUrls: ['./create-maestro.component.css']
})
export class CreateMaestroComponent implements OnInit {

  public codeSelected:String;
  public maxCategoryCode:String;

  public codigo:String;
  public descripcion:String;


  public form: FormGroup;

  public categoriasDatoMaestro: Array<any> = [];

  constructor(
    private admMaestroService: AdmMaestroService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.admMaestroService.getMaestroscategorias().subscribe((res:any)=>{
      this.categoriasDatoMaestro = res;
    });

    this.form = this.formBuilder.group({
      maeS_cCodigoTabla: [''],
      maeS_cDescripcion: [''],
      maeS_cCodigoCampo: [''],
      maeS_cDescripcionCampo: ['']
    })

  }

  public async enviarData(){

    await this.admMaestroService.GetMaxCode(
      this.codigo
      )
    .subscribe(resp =>{
      this.maxCategoryCode=resp

      this.form.patchValue({
        maeS_cCodigoCampo: this.maxCategoryCode
      })
      console.log(this.form.value)

      this.admMaestroService.createMaestroData(
        this.form.value
        )
      .subscribe(resp =>{
        console.log(this.form.value);
        this.router.navigate(['/mantenimiento/maestro']);
      })

    })


  }

  public onCategoryChanged(val:any){
    console.log(val);
    this.codigo = val.substring(0,3);
    this.descripcion = val.substring(3,val.length);

    this.codeSelected = val;
    this.form.patchValue({
      maeS_cCodigoTabla: this.codigo,
      maeS_cDescripcion: this.descripcion
    })
  }

}
