import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel } from '@ionic/angular/standalone';
import { SMS } from '@ionic-native/sms/ngx';

import { SmsService } from 'src/app/services/sms.service';

import { IMessage } from 'src/app/interfaces/globals.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
  providers: [SmsService, SMS]
})
export class HomePage {
  messageData: IMessage = { number: '', message: '' }

  constructor(private smsService: SmsService) {}

  sendSms() {
    this.smsService.sendSms(this.messageData.number, this.messageData.message)
      .then(() => {
        console.log('SMS enviado com sucesso!');
      })
      .catch((erro) => {
        console.error('Erro ao send SMS:', erro);
      });
  }
}
