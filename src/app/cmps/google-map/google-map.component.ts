import { Component, Input, OnInit } from '@angular/core';
import { googleMapLoc, Stay } from 'src/app/models/stay.model';

@Component({
  selector: 'map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Input() stay!: Stay;

  constructor() { }
  location !: googleMapLoc
  display: any
  center: google.maps.LatLngLiteral = { lat: 40.084, lng: 34.8 }
  zoom = 2
  maxZoom = 15
  minZoom = 2
  prices !: number[]

  icons = [{ lat: 40, lng: 39 }, { lat: 41, lng: 40 }, { lat: 30, lng: 32 }]

  IconOption: google.maps.Icon = {
    url: 'assets/img/home.png',
    scaledSize: new google.maps.Size(100, 100)
  }

  StayOption: google.maps.Icon = {
    url: 'assets/img/marker.png',
    scaledSize: new google.maps.Size(50, 20)
  }

  markerOptions: google.maps.MarkerOptions = {
    optimized: false,
    draggable: false,
    icon: this.IconOption,
  }

  stayOptions: google.maps.MarkerOptions = {
    optimized: false,
    draggable: false,
    icon: this.StayOption,
    label:'$125'
  }

  options: google.maps.MapOptions = {
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: this.maxZoom,
    minZoom: this.minZoom,
  }
  markerPositions: google.maps.LatLngLiteral[] = [];
  ngOnInit() {
    this.center.lat = this.stay.loc.lan
    this.center.lng = this.stay.loc.lat
    this.location = {
      lat: this.stay.loc.lan,
      lng: this.stay.loc.lat,
    }
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = (event.latLng.toJSON());
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }
}
