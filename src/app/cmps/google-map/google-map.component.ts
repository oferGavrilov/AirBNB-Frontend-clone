import { Component, Input, OnInit } from '@angular/core';
import { googleMapLoc, Loc, Marker, Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Input() stays!: Stay[] | null;

  constructor(private stayService: StayService) { }
  locations !: googleMapLoc[]
  display: any
  center: google.maps.LatLngLiteral = { lat: 32.084, lng: 34.8 }
  zoom = 11
  prices !: number[]

  markerOptions: google.maps.MarkerOptions = { draggable: false }
  markerPositions: google.maps.LatLngLiteral[] = this.locations;
  // marker !: Marker
  ngOnInit() {
    // if (!this.stays) return
    // for (let i = 0; i < this.stays.length; i++) {
    //   this.marker = new google.maps.Marker({
    //     position: this.getPositions(i),
    //     label: 'home'
    //   })
    // }
    // this.locations = this.stays.map(stay => {
    //   const { lat, lan: lng } = stay.loc
    //   return { lat, lng }
    // })
  }

  getPositions(idx: number) {
    if (!this.stays) return
    const { lat, lan: lng } = this.stays[idx].loc
    return { lat, lng }
  }

  getMarkerPrice() {
    if (this.stays) return this.prices = this.stays.map(stay => stay.price)
    return ''
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
