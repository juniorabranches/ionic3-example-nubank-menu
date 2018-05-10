import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
    constructor(public alertCtrl: AlertController) { }

    create(title: string, message: string) {
        let alert = this.alertCtrl.create(
            {
                title: title,
                subTitle: message,
                buttons: [
                    {
                        text: 'OK'
                    }
                ]
            })

        return alert.present();
    }

    createWithError(message: string) {
        return this.create("An error has occurred.", message);
    }

    createWithCallback(title: string, message: string, confirmation: boolean): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let buttons = null;
            if (confirmation) {
                buttons = [{
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        confirm.dismiss().then(() => resolve(false));
                    }
                }, {
                    text: 'Sim',
                    handler: () => {
                        confirm.dismiss().then(() => resolve(true));
                    }
                }];
            } else {
                buttons = [{
                    text: 'Ok',
                    handler: () => {
                        confirm.dismiss().then(() => resolve(true));
                    }
                }]
            }

            const confirm = this.alertCtrl.create({
                title,
                message,
                buttons: buttons
            });

            return confirm.present();
        });
    }
}
