import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  constructor() { }
  ngOnInit() { }
  display: any
  center: google.maps.LatLngLiteral = { lat: 32.084, lng: 34.8 }
  zoom = 11

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.display = event.latLng.toJSON();
  }
}
