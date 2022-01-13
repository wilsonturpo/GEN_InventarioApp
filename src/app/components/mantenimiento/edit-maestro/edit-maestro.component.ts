import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmMaestroService } from 'src/app/services/maestro/adm-maestro.service';

@Component({
  selector: 'app-edit-maestro',
  templateUrl: './edit-maestro.component.html',
  styleUrls: ['./edit-maestro.component.css']
})
export class EditMaestroComponent implements OnInit {

  public data:any = null;
  public form: FormGroup;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private admMaestroService: AdmMaestroService,
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state!['value'];
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
    //this.form.patchValue(this.data);


  }

  public enviarData(){
    console.log(this.form.value);
    console.log(this.form.value['maeS_Id'])

    this.admMaestroService.editMaestroData(
      this.form.value['maeS_Id'],
      this.form.value
      )
    .subscribe(resp =>{
      console.log(this.form.value);
      this.router.navigate(['/mantenimiento/maestro']);
    })

  }

}
