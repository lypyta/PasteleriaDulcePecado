import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  isButtonDisabled: boolean = true;

  constructor(private router: Router, private toastCtrl: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }

  updateButtonState() {
    // Habilita el botón solo si ambos campos están completos
    this.isButtonDisabled = !(this.username.trim() && this.password.trim());
  }

  login() {
    // Validaciones de caracteres para el usuario y la contraseña
    const usernameRegex = /^[a-zA-Z0-8]+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/^-]+$/;

    if (!this.username.trim()) {
      this.presentToast('Por favor, ingresa un nombre de usuario.');
      return;
    }

    if (!usernameRegex.test(this.username)) {
      this.presentToast('El usuario debe tener entre 3 y 8 caracteres y solo puede contener letras y números.');
      return;
    }

    if (!this.password.trim()) {
      this.presentToast('Por favor, ingresa una contraseña.');
      return;
    }

    if (this.password.length < 8) {
      this.presentToast('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (!passwordRegex.test(this.password)) {
      this.presentToast('La contraseña debe contener letras, números y caracteres especiales.');
      return;
    }

    // Puedes realizar la autenticación con tu backend aquí si es necesario
    // Por ejemplo, podrías llamar a un servicio de autenticación

    // Permitir el acceso directo a 'home2' una vez que los campos están completos
    this.router.navigate(['/home2']);
  }

  // Agrega la función para navegar a la página 'forgot-password'
  forgotPassword() {
    // Puedes agregar lógica adicional aquí si es necesario
    // Por ejemplo, podrías enviar un correo de recuperación de contraseña

    // Navegar a la página 'forgot-password'
    this.router.navigate(['/forgot-password']);
  }
}
