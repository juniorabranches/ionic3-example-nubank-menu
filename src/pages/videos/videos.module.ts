import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosPage } from './videos';
import { LoadingService } from '../../providers/util/loading.service';

@NgModule({
  declarations: [
    VideosPage,
  ],
  imports: [
    IonicPageModule.forChild(VideosPage),
  ],
  providers: [
    LoadingService
  ]
})
export class VideosModule {}
