import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConfigProvider Provider');
  }

  setConfig(showSlide?: boolean) {

    let perfil = {
      showSlide: false
    }

    if (showSlide) {
      perfil.showSlide = showSlide;
    }
    localStorage.setItem("config", JSON.stringify(perfil));
  }

  getPerfil(): any {
    return localStorage.getItem("config");
  }

  clearConfig() {
    localStorage.clear();
  }

}
