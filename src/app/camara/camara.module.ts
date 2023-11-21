// Importa el decorador NgModule de Angular, así como varios módulos necesarios para configurar el módulo.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importa el módulo IonicModule de Ionic para la integración con Angular.
import { IonicModule } from '@ionic/angular';

// Importa el módulo de enrutamiento asociado con la página de la cámara.
import { CamaraPageRoutingModule } from './camara-routing.module';

// Importa el componente CamaraPage que será declarado en este módulo.
import { CamaraPage } from './camara.page';

// Configuración del módulo usando el decorador NgModule.
@NgModule({
  // Importa otros módulos que se necesitan en este módulo.
  imports: [
    CommonModule,     // Proporciona directivas como *ngFor y *ngIf.
    FormsModule,      // Proporciona soporte para el enlace de datos bidireccional [(ngModel)].
    IonicModule,      // Proporciona componentes y estilos específicos de Ionic.
    CamaraPageRoutingModule  // Importa el módulo de enrutamiento para esta página específica.
  ],

  // Declara los componentes, directivas y pipes que pertenecen a este módulo.
  declarations: [CamaraPage]
})
// Define la clase del módulo.
export class CamaraPageModule {}
