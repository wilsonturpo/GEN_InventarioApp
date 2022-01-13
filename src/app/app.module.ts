import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Datatable
import { DataTablesModule } from "angular-datatables";

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

//Servicios Http
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaestroComponent } from './components/mantenimiento/maestro/maestro.component';
import { CreateMaestroComponent } from './components/mantenimiento/create-maestro/create-maestro.component';

import { FormsModule } from '@angular/forms';
import { EditMaestroComponent } from './components/mantenimiento/edit-maestro/edit-maestro.component';
import { DeleteMaestroComponent } from './components/mantenimiento/delete-maestro/delete-maestro.component';
import { ListarProductosComponent } from './components/operaciones/productos/listar-productos/listar-productos.component';
import { CreateProductoComponent } from './components/operaciones/productos/create-producto/create-producto.component';
import { AsignarProductoComponent } from './components/operaciones/productos/asignar-producto/asignar-producto.component';
import { ListarAsignacionesComponent } from './components/operaciones/asignaciones/listar-asignaciones/listar-asignaciones.component';
import { EditProductoComponent } from './components/operaciones/productos/edit-producto/edit-producto.component';
import { DeleteProductoComponent } from './components/operaciones/productos/delete-producto/delete-producto.component';
import { CreateSeccionComponent } from './components/mantenimiento/seccion/create-seccion/create-seccion.component';
import { CreateMedidaComponent } from './components/mantenimiento/medida/create-medida/create-medida.component';

//Servicios propios



@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    MainPageComponent,
    MaestroComponent,
    CreateMaestroComponent,
    EditMaestroComponent,
    DeleteMaestroComponent,
    ListarProductosComponent,
    CreateProductoComponent,
    AsignarProductoComponent,
    ListarAsignacionesComponent,
    EditProductoComponent,
    DeleteProductoComponent,
    CreateSeccionComponent,
    CreateMedidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
