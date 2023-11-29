// Importa los módulos y clases necesarios de Angular y RxJS.
import { Injectable } from '@angular/core';
import { ClProducto } from './model/ClProducto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

// URL de la API y opciones HTTP comunes.
const apiUrl = "https://sumativa2.onrender.com/api/productos";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

// Decorador Injectable para proporcionar este servicio en la raíz de la aplicación.
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // Constructor que inyecta el servicio HttpClient para realizar solicitudes HTTP.
  constructor(private http: HttpClient) { }

  // Función privada para manejar errores en las operaciones HTTP.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error);
      return of(result as T);
    };
  }

  // funcion para agregar un nuevo producto.
  addProduct(producto: ClProducto): Observable<ClProducto> {
    return this.http.post<ClProducto>(apiUrl + "/", producto, httpOptions)
      .pipe(
        tap((producto: ClProducto) => console.log('added product w/:', producto)),
        catchError(this.handleError<ClProducto>('addProduct'))
      );
  }

  // Método para obtener todos los productos.
  getProducts(): Observable<ClProducto[]> {
    return this.http.get<ClProducto[]>(apiUrl)
      .pipe(
        tap(products => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  // Método para obtener un producto por su ID.
  getProduct(idProducto: number): Observable<ClProducto> {
    return this.http.get<ClProducto>(apiUrl + "/" + idProducto)
      .pipe(
        tap(_ => console.log(`fetched product id=${idProducto}`)),
        catchError(this.handleError<ClProducto>(`getProduct id=${idProducto}`))
      );
  }

  // Método para eliminar un producto por su ID.
  deleteProduct(idProducto: number): Observable<ClProducto> {
    return this.http.delete<ClProducto>(apiUrl + "/" + idProducto, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted product id=${idProducto}`)),
        catchError(this.handleError<ClProducto>(`deleteProduct`))
      );
  }

  // Método para actualizar un producto por su ID.
  updateProduct(idProducto: number, producto: ClProducto): Observable<ClProducto> {
    return this.http.put<ClProducto>(apiUrl + "/" + idProducto, producto, httpOptions)
      .pipe(
        tap(_ => console.log(`updated product id=${idProducto}`)),
        catchError(this.handleError<any>('updateProduct'))
      );
  }
}













