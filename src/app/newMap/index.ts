import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { LocationService } from '../service/list';

@Component({
  selector: 'app-new-map',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class NewMapComponent implements OnInit {
    @Input() product;  // 指定product值从父组件中传递
    list;
    constructor(
        private route: ActivatedRoute,
        private locationService: LocationService
    ) {
        this.list = locationService.getItems();
    }

    editItem(item) {
        
    }


    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            // this.product = products[+params.get('productId')];
          });
    }
}