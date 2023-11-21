import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  email: string = '';
  phoneNumber: string = '';

  constructor(private router: Router, private toastCtrl: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }

  register() {
    // Validaciones de caracteres para el usuario, la contraseña, el correo electrónico y el número de teléfono

    // Validación de longitud mínima para el nombre de usuario
    if (this.username.length < 7) {
      this.presentToast('El nombre de usuario debe tener al menos 7 caracteres.');
      return;
    }

    // Validación de longitud mínima para la contraseña
    if (this.password.length < 8) {
      this.presentToast('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Validación básica de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.presentToast('Ingresa un correo electrónico válido.');
      return;
    }

    // Validación básica de formato de número de teléfono
    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(this.phoneNumber)) {
      this.presentToast('Ingresa un número de teléfono válido (10 dígitos sin espacios ni guiones).');
    }

    // Lógica de registro
    // Aquí deberías realizar la lógica de registro con tu backend
    // Puedes utilizar servicios, HttpClient, etc.

    // Ejemplo básico: si el registro es exitoso, redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
    this.presentToast('Registro exitoso. Inicia sesión con tus nuevas credenciales.');
  }
}
