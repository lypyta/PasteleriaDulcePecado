// Importa las clases necesarias desde Angular.
import { Component, OnInit } from '@angular/core';

// Importa la clase ClProducto desde el archivo de modelo.
import { ClProducto } from '../model/ClProducto';

// Define el componente ProductAllPage.
@Component({
  selector: 'app-product-all', // Selector del componente.
  templateUrl: './product-all.page.html', // Ruta al archivo de plantilla HTML asociado al componente.
  styleUrls: ['./product-all.page.scss'], // Ruta al archivo de estilos asociado al componente.
})
export class ProductAllPage implements OnInit {
  // Propiedad para mostrar mensajes de error.
  msgError = '';

  // Propiedades para controlar el estado de los botones.
  buttonEliminarDisabled = false;
  buttonLeerDisabled = false;
  buttonActualizarDisabled = false;
  buttonCrearDisabled = false;

  // Objeto de tipo ClProducto para almacenar la información de un producto.
  producto: ClProducto = {
    // Propiedades del producto con valores predeterminados o iniciales.
    idProducto: 0,
    codigo: '09-G03',
    nombreprod: '',
    precio: 0,
    cantidad: 0,
    fechaNacimiento: '',
    rut: '',
    dv: '',
    enfermedad: '0',
    fonocontacto: 0,
    categoria: '0',
    editorial: '0',
    raza: '0',
    edad: 0,
    altura: 0,
    hrini: '0',
    hrfin: '0',
    direccion: '0',
    fCreacion: '',
  };

  // Propiedad para almacenar un identificador.
  public id: string = '';

  // Constructor del componente.
  constructor() { }

  // Método del ciclo de vida del componente llamado después de que el componente ha sido inicializado.
  ngOnInit() { }

  // Método para leer información.
  leer() {
    // Lógica para la operación de lectura.
  }

  // Método para eliminar información.
  eliminar() {
    // Lógica para la operación de eliminación.
  }

  // Método para grabar información.
  grabar() {
    // Lógica para la operación de grabación.
  }

  // Método para actualizar información.
  actualizar() {
    // Lógica para la operación de actualización.
  }

  // Método para grabar y actualizar automáticamente.
  grabarActualizarAutomatico() {
    // Lógica para la operación de grabación y actualización automática.
  }
}

