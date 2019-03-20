import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetalhePage } from './movie-detalhe';

@NgModule({
  declarations: [
    MovieDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetalhePage),
  ],
})
export class MovieDetalhePageModule {}
