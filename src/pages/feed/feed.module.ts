import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { MovieDetalhePageModule } from '../movie-detalhe/movie-detalhe.module';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
    MovieDetalhePageModule
  ],
})
export class FeedPageModule {}
