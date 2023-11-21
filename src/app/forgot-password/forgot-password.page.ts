import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.page.html',
  styleUrls: ['forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = '';

  constructor(private router: Router, private toastCtrl: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }

  recoverPassword() {
    // Aquí deberías agregar la lógica para enviar un correo de recuperación de contraseña
    // Puedes utilizar servicios, HttpClient, etc.

    // Ejemplo básico: mostrar un mensaje de éxito y volver a la página de inicio de sesión
    this.presentToast('Se ha enviado un correo de recuperación de contraseña a ' + this.email);
    this.router.navigate(['/login']);
  }
}
