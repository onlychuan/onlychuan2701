import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private modalController: ModalController, private router:Router) {}

  async registerModal() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
}


login(){
  this.router.navigateByUrl('navigation');
}
}
