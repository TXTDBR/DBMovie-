import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MooveProvider } from '../../providers/moove/moove';
import { MovieDetalhePage } from '../movie-detalhe/movie-detalhe';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MooveProvider
  ]
})
export class FeedPage {
  public filmes:any = [];
  public nomeUsuario:string = "Charles França do Code";

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private mooveProvider: MooveProvider
     ) {
  }

  pushPage(id){
    this.navCtrl.push(MovieDetalhePage,{
      id: id
    });
    
  }

  ionViewDidLoad() {
    this.mooveProvider.getLatesMoove().subscribe(
      data=>{
        const rs = (data as any);
        this.filmes = rs.results;
      }, error=>{
        console.log(error);
      }
    )   
  }
}
