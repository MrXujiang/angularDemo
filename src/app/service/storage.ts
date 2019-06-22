import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Storage {
    get(k) {
        return JSON.parse(localStorage.getItem(k))
    }

    set(k, v) {
        localStorage.setItem(k, JSON.stringify(v))
    }

    remove(k) {
        localStorage.removeItem(k)
    }
}