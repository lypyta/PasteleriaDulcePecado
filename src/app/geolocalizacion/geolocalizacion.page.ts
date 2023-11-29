// geolocalizacion.page.ts

import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Plugins } from '@capacitor/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Router } from '@angular/router'; // Importa el servicio Router

const { GoogleMaps } = Plugins;

@Component({
  selector: 'app-geo',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  constructor(private router: Router) {} // Agrega el servicio Router como una propiedad

  ngOnInit() {
    this.loadLocationAndMap();
  }

  async loadLocationAndMap() {
    try {
      await this.getCurrentLocation();
      await this.createGoogleMap();
    } catch (error) {
      console.error('Error loading location and map:', error);
    }
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    } catch (error) {
      console.error('Error getting current location:', error);
      throw error;
    }
  }

  async createGoogleMap() {
    try {
      const apiKey = 'AIzaSyBJV2FJvgQkxovVpuGZwlPh6A3Pck9m6t0';
      const mapRef = document.getElementById('map');

      if (!mapRef) {
        console.error('Error: mapRef is null');
        return;
      }

      const newMap = await GoogleMap.create({
        id: 'my-map',
        element: mapRef,
        apiKey: apiKey,
        config: {
          center: {
            lat: this.latitude,
            lng: this.longitude,
          },
          zoom: 15,
        },
      });
    } catch (error) {
      console.error('Error creating Google Map:', error);
      throw error;
    }
  }

  // Resto del código...

  camara() {
    this.router.navigate(['/camara']);
  }

  geolocalizacion() {
    this.router.navigate(['/geolocalizacion']);
  }
}
