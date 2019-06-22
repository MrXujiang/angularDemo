import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AK, BASE_URL } from '../config';
import * as $ from "jquery";

@Injectable({
    providedIn: 'root'
  })
export class Http {
    constructor(
        private http: HttpClient
    ) {

    }

    params(data = {}) {
        let obj = {...data, ak: AK, output: 'json' };
        let paramsStr = '?';
        for(let v in obj) {
            paramsStr += `${v}=${obj[v]}&`
        };
        return paramsStr.substr(0, paramsStr.length -1);
    }

    get(url, params) {
        return this.http.get(`${BASE_URL}${url}${this.params(params)}`)
    }

    getCors(url, params) {
        return new Promise((resolve, reject) => {
            $.getScript(`${BASE_URL}${url}${this.params(params)}`, (res, status) => {
                if(status === 'success') {
                    resolve(status)
                } else {
                    reject(status)
                }  
            });
        })
        
    }
}
