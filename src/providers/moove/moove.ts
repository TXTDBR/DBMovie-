import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MooveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MooveProvider {
public base = "https://api.themoviedb.org/3/";
public apiKey = "76783b6dbc60f58297b302f9bef9eb6d";

  constructor(public http: HttpClient) {
    console.log('Hello MooveProvider Provider');
  }

  getLatesMoove():any{
    return this.http.get(this.base+"movie/popular?api_key="+this.apiKey);
  }

  getDetalhesMovie(id):any{
    return this.http.get(this.base+"movie/"+id+"?api_key="+this.apiKey);
  }
}
