import { Injectable } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private sms: SMS) { }

  sendSms(numero: string, mensagem: string): Promise<any> {
    return this.sms.send(numero, mensagem);
  }
}
