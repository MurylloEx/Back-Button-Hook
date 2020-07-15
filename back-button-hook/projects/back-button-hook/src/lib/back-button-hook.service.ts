import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BackButtonHook } from './back-button-hook';

@Injectable({
  providedIn: 'root'
})
export class BackButtonHookService {

  public Hook: BackButtonHook;

  constructor(private platform: Platform) {
    this.Hook = new BackButtonHook(this.platform);
  }

}