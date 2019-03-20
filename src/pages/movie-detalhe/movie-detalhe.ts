import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MooveProvider } from '../../providers/moove/moove';

/**
 * Generated class for the MovieDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detalhe',
  templateUrl: 'movie-detalhe.html',
  providers: [
    MooveProvider
  ]
})
export class MovieDetalhePage {
  public id;
  public filme:any = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MooveProvider) {
       this.id = navParams.get("id");
  }

  ionViewDidLoad() {
    this.movieProvider.getDetalhesMovie(this.id).subscribe(
      data => {
        const rs = (data as any);
        this.filme = rs;
      },error =>{
        console.log(error);
      }
    )
  }

}
