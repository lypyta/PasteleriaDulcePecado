import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) {
    // Llama a la función ngOnInit en el constructor
    this.ngOnInit();
  }

  // Inicializa el espacio de almacenamiento
  async ngOnInit() {
    await this.storage.create();
  }

  async login(username: string, password: string): Promise<boolean> {
    // Recupera el usuario almacenado
    const usuario = await this.storage.get('user');

    if (usuario) {
      // Muestra datos del usuario en la consola
      console.log(usuario.username, '-', usuario.password);
    } else {
      // Usuario no almacenado en la memoria interna
      console.log('No se encontraron datos de usuario');
    }

    // Sentencia if que valida al usuario
    if (username === usuario.username && password === usuario.password) {
      await this.storage.set('isLoggedIn', true);
      return true;
    } else {
      return false;
    }
  }

  async register(username: string, password: string): Promise<boolean> {
    try {
      // Almacena el usuario
      await this.storage.set('user', { username, password });
      return true; // Indica que el registro fue exitoso
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      return false; // Indica que hubo un error en el registro
    }
  }

  async isLoggedIn(): Promise<boolean> {
    // Verifica si el usuario está autenticado
    return !!(await this.storage.get('isLoggedIn'));
  }

  async logout(): Promise<void> {
    // Elimina la marca de autenticación al cerrar sesión
    await this.storage.remove('isLoggedIn');
  }
}
