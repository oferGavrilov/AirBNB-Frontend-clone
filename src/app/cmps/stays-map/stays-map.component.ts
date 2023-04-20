import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { googleMapLoc, Stay } from 'src/app/models/stay.model';

@Component({
  selector: 'stays-map',
  templateUrl: './stays-map.component.html',
  styleUrls: ['./stays-map.component.scss']
})

export class StaysMapComponent implements OnInit {
  @Input() stays!: Stay[] | null;

  constructor(private router: Router) {
   }
  location !: googleMapLoc
  display: any
  center: google.maps.LatLngLiteral = { lat: 40.084, lng: 34.8 }
  zoom = 9
  maxZoom = 15
  minZoom = 2

  StayOption: google.maps.Icon = {
    url: 'https://res.cloudinary.com/du63kkxhl/image/upload/v1681630116/marker_hhfjge.png',
    scaledSize: new google.maps.Size(50, 20)
  }

  stayOptions: google.maps.MarkerOptions = {
    optimized: false,
    draggable: false,
    icon: this.StayOption,
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
    if (this.stays) {
      this.center.lat = this.stays[0].loc.lan
      this.center.lng = this.stays[0].loc.lat
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

  getLocation(stay: Stay) {
    const loc = { lat: stay.loc.lan, lng: stay.loc.lat}
    return loc
  }

  getStayOption() {
    const stayOptions: google.maps.MarkerOptions = {
      optimized: false,
      draggable: false,
      icon: this.StayOption,
    }
    return stayOptions;
  }

  onClickMark(stayId: string) {
    this.router.navigate(['', stayId])
  }
}
