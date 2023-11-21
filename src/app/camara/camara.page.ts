// Importa las clases y servicios necesarios desde Angular e Ionic.
import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/photo.service'; // Importa el servicio para manejar las fotos.
import { defineCustomElements } from '@ionic/pwa-elements/loader'; // Importa funciones para inicializar elementos de Ionic.
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento de Angular.
import { MenuController } from '@ionic/angular'; // Importa el controlador de menús de Ionic.
import { ProductListPage } from '../producto/product-list/product-list.page'; // Importa la página de lista de productos.

// Define el componente CamaraPage.
@Component({
  selector: 'app-camara', // Selector del componente.
  templateUrl: './camara.page.html', // Ruta al archivo de plantilla HTML asociado al componente.
  styleUrls: ['./camara.page.scss'], // Ruta al archivo de estilos asociado al componente.
})

// Implementa la interfaz OnInit para ejecutar lógica de inicialización en el ciclo de vida del componente.
export class CamaraPage implements OnInit {

  // Constructor del componente.
  constructor(
    public photoService: PhotoService, // Inyecta el servicio PhotoService para manejar las fotos.
    private menu: MenuController, // Inyecta el controlador de menús de Ionic.
    private router: Router // Inyecta el servicio de enrutamiento de Angular.
  ) {
    // Inicializa los elementos web de Ionic.
    defineCustomElements(window);
  }

  // Método del ciclo de vida del componente llamado después de que el componente ha sido inicializado.
  ngOnInit() {
    // Lógica de inicialización si es necesaria.
  }

  // Método para agregar una nueva foto a la galería.
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  // Método para navegar a la página de la cámara.
  camara() {
    // Lógica específica para la opción de la cámara.
    this.router.navigate(['camara']); // Navega a la página de la cámara.
    this.menu.close('end'); // Cierra el menú lateral.
  }

  // Método para navegar a la página de geolocalización.
  geolocalizacion() {
    // Lógica específica para la opción de geolocalización.
    this.router.navigate(['geo']); // Navega a la página de geolocalización.
    this.menu.close('end'); // Cierra el menú lateral.
  }

  // Método para navegar a la página de inicio.
  home() {
    this.router.navigate(['home']); // Navega a la página de inicio.
    this.menu.close('end'); // Cierra el menú lateral.
  }

  // Método para navegar a la página de lista de productos.
  productList() {
    this.router.navigate(['product-list']); // Navega a la página de lista de productos.
    this.menu.close('end'); // Cierra el menú lateral.
  }
}




