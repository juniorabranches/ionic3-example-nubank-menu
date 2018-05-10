import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

import { LoadingService } from '../../providers/util/loading.service';


@IonicPage()
@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html'
})
export class FotosPage {

  imageUrl: string = 'assets/imgs/background.png';
  pages: Array<{title: string, component: any, icon:any}>;
  constructor(private menu: MenuController, public navCtrl: NavController, public loading: LoadingService) {
    this.menu.enable(true);
    this.menu.open();    
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
