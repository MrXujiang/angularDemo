import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product = 1;
  list = [1,2,3,4];
  share(e) {
    console.log(e)
  }
}
