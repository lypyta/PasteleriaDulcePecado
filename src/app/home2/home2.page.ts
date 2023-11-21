import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa el servicio Router

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor(private router: Router) { }  // Inyecta el servicio Router

  ngOnInit() {
    // Lógica que se ejecuta al inicializar el componente
  }

  // Función para navegar a la página 'product-list'
  navigateToProductList() {
    this.router.navigate(['src\app\producto\product-list\product-list.page.html']);
  }
  VerProducto() {
    this.router.navigate(['src\app\producto\product-list\product-list.page.html']);
  }

  // Puedes agregar más funciones según tus necesidades

}
