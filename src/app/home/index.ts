import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Http } from '../service/http';
import { FormBuilder } from '@angular/forms';
import { LocationService } from '../service/list';

let locationData = null;
window['cb'] = function(data) {
  locationData = data && data.results;
}


@Component({
  selector: 'app-home',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class HomeComponent implements OnInit {
    @Input() product;  // 指定product值从父组件中传递
    hasDoneList;
    checkoutForm;
    constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private locationService: LocationService,
      private http: Http,
    ) {
      this.hasDoneList = this.locationService.getItems();
      this.checkoutForm = this.formBuilder.group({
        name: '',
        price: '',
        date: ''
      });
    }

    ngOnInit() {
      let map = new BMap.Map("js_hover_map");
      // 创建地图实例  
      map.centerAndZoom(new BMap.Point(118.454, 32.955), 6);
      map.enableScrollWheelZoom();
      let hasDoneLocations = [];
      this.locationService.getItems().forEach(item => {
        item.hasDone && hasDoneLocations.push(new BMap.Point(item.location.lng,item.location.lat))
      })

      let curve = new BMapLib.CurveLine(hasDoneLocations, {strokeColor:"red", strokeWeight:4, strokeOpacity:0.5}); //创建弧线对象
      map.addOverlay(curve); //添加到地图中
      curve.enableEditing(); //开启编辑功能
      
    }

    async searchLocation(v) {
      return await this.http.getCors('/place/v2/search',
      { region:v, query: v, callback: 'cb' });
    }

    search(v) {
      this.http.get('/assets/shopping.json', {})
      .subscribe(
        (data) => console.log(data),
        err => {console.log(err);});
    }

    onSubmit(customerData) {
      if(customerData.name) {
        this.searchLocation(customerData.name).then(data => {
          this.locationService.addToList({...customerData, location: locationData[0].location, hasDone: false})
        });
        
      } else {
        alert('请填写旅游地点！');
        return
      }

      this.checkoutForm.reset();
    }

    onReset() {
      this.checkoutForm.reset();
    }
}