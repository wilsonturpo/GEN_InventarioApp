import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmProductoService } from 'src/app/services/producto/adm-producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  public productoData:any = null;
  public form: FormGroup;



  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private admProductoService: AdmProductoService,
  ) {

    const navigation = this.router.getCurrentNavigation();
    this.productoData = navigation?.extras?.state!['value'];

  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id:[''],
      seccionId: [''],
      seccion: [''],
      medidaId: [''],
      medida: [''],
      proD_cDescripcion: [''],
      proD_mPrecio: [''],
      proD_nStock: [''],
      proD_Id: ['']
    })

    if(typeof this.productoData ==='undefined'){
      this.router.navigate(['/operaciones/productos']);
    }else{
      this.form.patchValue(this.productoData);
    }

  }


  public enviarData(){
    this.admProductoService.editProductotData(
      this.form.value['id'],
      this.form.value
      )
    .subscribe(resp =>{
      this.router.navigate(['/operaciones/productos']);
    })

  }

}
