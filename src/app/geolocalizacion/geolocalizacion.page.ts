import { Component, OnInit} from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Plugins } from '@capacitor/core';


const { GoogleMaps } = Plugins;


@Component({
  selector: 'app-geo',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {
  latitude: number = 0; // Inicializamos las variables
  longitude: number = 0


  constructor() {}


  async ngOnInit() {

    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }


  
}




