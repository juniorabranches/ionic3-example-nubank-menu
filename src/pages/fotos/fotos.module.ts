import { FotosPage } from './fotos';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoadingService } from '../../providers/util/loading.service';

@NgModule({
  declarations: [
    FotosPage
  ],
  imports: [
    IonicPageModule.forChild(FotosPage)
  ],
  exports: [
    FotosPage
  ],
  providers: [
    LoadingService
  ]
})

export class FotosModule { }
