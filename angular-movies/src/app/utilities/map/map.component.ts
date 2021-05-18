
import * as L from 'leaflet';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoordinateMap } from './cordinate';
//import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
    this.initialCordinates.map(value => L.marker([value.lati,value.long]));
  }

  @Input() initialCordinates: CoordinateMap[]=[];


  @Output() onSelectedMap = new EventEmitter<CoordinateMap>();
  map: L.Map;

  layers: L.Marker<any>[]= [];

  Mapoptions = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Project' })
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909)
  };


        // get the reference to the map
      onMapReady(map: L.Map) {
        this.map = map;
      }

      // change the view using that map reference to another location
      changeView() {
        this.map.panTo(new L.LatLng(40.737, -73.923));
      }


      leafletMapClick(evnet: L.LeafletMouseEvent)
      {
        const latitude= evnet.latlng.lat;

        const longitude= evnet.latlng.lng;

      //  console.log({latitude, longitude});

        this.layers=[];
        this.layers.push(L.marker([latitude, longitude]));

        this.onSelectedMap.emit({long: longitude,lati: latitude});
      }
}
