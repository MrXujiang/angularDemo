import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/list';

@Component({
  selector: 'app-bar',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class AppBar implements OnInit {
    items;
    constructor(private locationService: LocationService) {
      this.items = this.locationService.getItems();
    }

    ngOnInit() {

    }
}