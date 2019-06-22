import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 路由配置
import { AppRoutingModule } from './app-routing.module';
// material组件库
import { CustomMaterialModule } from './custom.module';
// 页面，组件
import { AppComponent } from './app.component';
import { AppBar } from './components/bar';
import { AppFooter } from './components/footer';
// import { CartComponent } from './components/cart';
import { HomeComponent } from './home';
import { NewMapComponent } from './newMap';

@NgModule({
  declarations: [
    AppComponent,
    AppBar,
    AppFooter,
    HomeComponent,
    NewMapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
