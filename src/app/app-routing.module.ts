import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CreateMaestroComponent } from './components/mantenimiento/create-maestro/create-maestro.component';
import { DeleteMaestroComponent } from './components/mantenimiento/delete-maestro/delete-maestro.component';
import { EditMaestroComponent } from './components/mantenimiento/edit-maestro/edit-maestro.component';
import { MaestroComponent } from './components/mantenimiento/maestro/maestro.component';
import { CreateMedidaComponent } from './components/mantenimiento/medida/create-medida/create-medida.component';
import { CreateSeccionComponent } from './components/mantenimiento/seccion/create-seccion/create-seccion.component';
import { ListarAsignacionesComponent } from './components/operaciones/asignaciones/listar-asignaciones/listar-asignaciones.component';
import { AsignarProductoComponent } from './components/operaciones/productos/asignar-producto/asignar-producto.component';
import { CreateProductoComponent } from './components/operaciones/productos/create-producto/create-producto.component';
import { DeleteProductoComponent } from './components/operaciones/productos/delete-producto/delete-producto.component';
import { EditProductoComponent } from './components/operaciones/productos/edit-producto/edit-producto.component';
import { ListarProductosComponent } from './components/operaciones/productos/listar-productos/listar-productos.component';

const routes: Routes = [


  {path: 'ingreso', component: IngresoComponent},
  {path: '', component: IngresoComponent},
  {path: 'main-page', component: MainPageComponent, children:[

    //Visualización de maestros
    {path: 'mantenimiento/maestro', component: MaestroComponent},

    //Crud secciones
    {path: 'mantenimiento/maestro/seccion/create', component: CreateSeccionComponent},

    //Crud medida
    {path: 'mantenimiento/maestro/medida/create', component: CreateMedidaComponent},

    //Operaciones
    {path: 'operaciones/productos', component: ListarProductosComponent},
    {path: 'operaciones/productos/create', component: CreateProductoComponent},
    {path: 'operaciones/productos/edit', component: EditProductoComponent},
    {path: 'operaciones/productos/delete', component: DeleteProductoComponent},
    {path: 'operaciones/productos/asignar', component: AsignarProductoComponent},

    //Asignaciones
    {path: 'operaciones/asignaciones', component: ListarAsignacionesComponent},

    ]},


  //{path: '**', redirectTo: 'app-ingreso', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
