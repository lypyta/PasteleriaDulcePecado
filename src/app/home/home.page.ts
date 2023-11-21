import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { NavController, Animation, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController
  ) {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  ingresar() {
    this.router.navigate(['/login']); // Navega a la página de login
  }

  crearCuenta() {
    this.router.navigate(['/register']); // Navega a la página de registro
  }
  irAModuloAdministrativo() {
    this.router.navigate(['/moduloadministrativo']); // Navega a la página de login
  }
}
