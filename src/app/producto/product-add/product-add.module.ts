// Importa el decorador NgModule de Angular, así como varios módulos necesarios para configurar el módulo.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importa el módulo IonicModule de Ionic para la integración con Angular.
import { IonicModule } from '@ionic/angular';

// Importa el módulo de enrutamiento asociado con la página de agregar productos.
import { ProductAddPageRoutingModule } from './product-add-routing.module';

// Importa el componente ProductAddPage que será declarado en este módulo.
import { ProductAddPage } from './product-add.page';
// Importa el módulo ReactiveFormsModule de Angular para trabajar con formularios reactivos.
import { ReactiveFormsModule } from '@angular/forms';

// Define el módulo para la página de agregar productos.
@NgModule({
  // Importa otros módulos que se necesitan en este módulo.
  imports: [
    CommonModule,              // Proporciona directivas como *ngFor y *ngIf.
    FormsModule,               // Proporciona soporte para el enlace de datos bidireccional [(ngModel)].
    IonicModule,               // Proporciona componentes y estilos específicos de Ionic.
    ProductAddPageRoutingModule, // Importa el módulo de enrutamiento para esta página específica.
    ReactiveFormsModule,        // Importa el módulo de formularios reactivos.
  ],
  // Declara los componentes, directivas y pipes que pertenecen a este módulo.
  declarations: [ProductAddPage]
})
// Define la clase del módulo para la página de agregar productos.
export class ProductAddPageModule {}
