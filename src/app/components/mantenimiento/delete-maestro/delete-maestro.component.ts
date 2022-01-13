import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';


@Component({
  selector: 'app-delete-maestro',
  templateUrl: './delete-maestro.component.html',
  styleUrls: ['./delete-maestro.component.css']
})
export class DeleteMaestroComponent implements OnInit {

  public data:any = null;
  public form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private admMaestroService: AdmMaestroService,
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state!['value'];
    console.log(this.data)
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      maeS_Id: [''],
      maeS_cCodigoTabla: [''],
      maeS_cDescripcion: [''],
      maeS_cCodigoCampo: [''],
      maeS_cDescripcionCampo: ['']
    })

    if(typeof this.data ==='undefined'){
      this.router.navigate(['/mantenimiento/maestro/create']);
    }else{
      this.form.patchValue(this.data);
    }
  }

  public enviarData(){
    console.log(this.form.value);
    console.log(this.form.value['maeS_Id'])

    this.admMaestroService.deleteMaestroData(
      this.form.value['maeS_Id']
      )
    .subscribe(resp =>{
      console.log(this.form.value);
      this.router.navigate(['/mantenimiento/maestro']);
    })

  }

}
