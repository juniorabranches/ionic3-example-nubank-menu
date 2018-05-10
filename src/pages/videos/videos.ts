import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { LoadingService } from '../../providers/util/loading.service';

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  imageUrl: string = 'assets/imgs/background.png';
  pages: Array<{title: string, component: any, icon:any}>;
  constructor(private menu: MenuController, public navCtrl: NavController, public navParams: NavParams, public loading: LoadingService) {
    this.pages = [
      { title: 'Fotos', component: 'FotosPage',  icon: 'assets/imgs/fotos.png' },
      { title: 'Vídeos', component: 'VideosPage', icon: 'assets/imgs/videos.png' }
    ];

  }

  openPage(page) {
    this.loading.present();
    this.loading.dismiss().then(() => {
        this.navCtrl.setRoot(page.component);
    });
  }



}
