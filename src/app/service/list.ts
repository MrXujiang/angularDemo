import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from './storage';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
    items = [
      {
        name: '北京',
        desc: '北京好，风景真的不错！',
        price: '2000',
        date: '2018-12-29',
        hasDone: true,
        location: {
          lat: 39.910924,
          lng: 116.413387
        }
      },
      {
        name: '苏州',
        desc: '苏州好，去了还想去，不错！',
        price: '2000',
        hasDone: true,
        date: '2018-12-29',
        location: { 
          lat: 31.303565,
          lng: 120.592412
        }
      },
      {
        name: '上海',
        desc: '上海好，去了还想去，不错！',
        price: '2000',
        hasDone: true,
        date: '2018-12-29',
        location: { 
          lat: 31.235929, 
          lng: 121.48054 
        }
      },
      {
        name: '武汉',
        desc: '武汉好，去了还想去，不错！',
        price: '2000',
        hasDone: true,
        date: '2018-12-29',
        location: { 
          lat: 30.598467,
          lng: 114.311586
        }
      }
    ];

    constructor(
        private http: HttpClient,
        private store: Storage
    ) {
      if(store.get('list')) {
        this.items = store.get('list');
      }
    }
  
    addToList(location) {
      this.items.push(location);
      this.store.set('list', this.items);
    }
  
    getItems() {
      return this.items;
    }
  
    clearList() {
      this.items = [];
      return this.items;
    }

    getPrice() {
        return this.http.get('/assets/shopping.json')
    }
  }