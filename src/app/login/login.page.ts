import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
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

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private authservice: AuthService,
    private navCtrl: NavController,   
  ) {}

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }

  async login() {
    const loggedIn = await this.authservice.login(this.username, this.password);

    if (loggedIn) {
      this.navCtrl.navigateRoot('/home2');
    } else {
      console.log('Credenciales incorrectas');
    }
  }

  async register() {
    const registered = await this.authservice.register(this.username, this.password);

    if (registered) {
      console.log('Usuario registrado exitosamente:', this.username);
    } else {
      console.log('Error al registrar el usuario');
    }
  }

  updateButtonState() {
    this.isButtonDisabled = !(this.username.trim() && this.password.trim());
  }

  validateInputs() {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/^-]+$/;

    if (!this.username.trim()) {
      this.presentToast('Por favor, ingresa un nombre de usuario.');
      return false;
    }

    if (!usernameRegex.test(this.username)) {
      this.presentToast('El usuario debe tener entre 3 y 8 caracteres y solo puede contener letras y números.');
      return false;
    }

    if (!this.password.trim()) {
      this.presentToast('Por favor, ingresa una contraseña.');
      return false;
    }

    if (this.password.length < 8) {
      this.presentToast('La contraseña debe tener al menos 8 caracteres.');
      return false;
    }

    if (!passwordRegex.test(this.password)) {
      this.presentToast('La contraseña debe contener letras, números y caracteres especiales.');
      return false;
    }

    return true;
  }

  navigateToHome2() {
    this.router.navigate(['/home2']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  camara() {
    this.router.navigate(['/camara']);
  }

  geolocalizacion() {
    this.router.navigate(['/geolocalizacion']);
  }
}
