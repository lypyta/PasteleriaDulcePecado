import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  

  constructor(private router: Router, 
    private toastCtrl: ToastController,
    private authservice: AuthService,
    private navCtrl: NavController,
    private storage: Storage,
    
    
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

}
