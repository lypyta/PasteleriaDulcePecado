// Importa el decorador NgModule de Angular, así como las clases Routes y RouterModule necesarias para la configuración de rutas.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importa el componente CamaraPage que se asociará con la ruta definida.
import { CamaraPage } from './camara.page';

// Define las rutas de la aplicación. En este caso, solo hay una ruta que corresponde a la URL vacía ('').
const routes: Routes = [
  {
    path: '',
    component: CamaraPage
  }
];

// Configura el módulo de enrutamiento usando el decorador NgModule.
@NgModule({
  // Importa el módulo de enrutamiento de Angular y configura las rutas definidas anteriormente.
  imports: [RouterModule.forChild(routes)],

  // Exporta el módulo de enrutamiento para que pueda ser utilizado por otros módulos.
  exports: [RouterModule],
})
// Define la clase del módulo de enrutamiento. El nombre de la clase (CamaraPageRoutingModule) es convencionalmente derivado del nombre del componente asociado.
export class CamaraPageRoutingModule {}
