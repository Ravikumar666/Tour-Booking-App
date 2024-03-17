import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from './place.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadOffers: Place[] = [];
  constructor(
    private placeService: PlacesService,
    private menuContrl: MenuController
  ) {}

  ngOnInit() {
    this.loadOffers = this.placeService.Place;
  }

  openMenu() {
    this.menuContrl.toggle();
  }
}
