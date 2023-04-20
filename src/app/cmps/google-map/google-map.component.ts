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
  zoom = 12
  maxZoom = 15
  minZoom = 2
  prices !: number[]

  IconOption: google.maps.Icon = {
    url: 'https://res.cloudinary.com/du63kkxhl/image/upload/v1681630007/home_wx3a5a.png',
    scaledSize: new google.maps.Size(100, 100)
  }

  markerOptions: google.maps.MarkerOptions = {
    optimized: false,
    draggable: false,
    icon: this.IconOption,
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
