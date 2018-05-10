import { Injectable } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {
    loading: Loading;
    constructor(public loadingCtrl: LoadingController) {
    }

    present() {
        this.loading = this.loadingCtrl.create({
            
            //content:
          /*<div class="custom-spinner-container">
            <img class="loading" src="assets/imgs/loading.gif" />
          </div>`*/
        });
        return this.loading.present();
    }

    presentWithMessage(message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });

        return this.loading.present();
    }

    dismiss() {
        return new Promise((resolve, reject) => {
            if (this.loading) {
                return this.loading.dismiss(resolve(true)).catch(error => {
                    console.log('loading error: ', error);
                });
            } else {
                resolve(true);
            }
        });

    }
}
