import { Component, DefaultIterableDiffer } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { AddPagePage } from '../add-page/add-page.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController) {
   
  }
  contacts=[{firstname:"Allen",lastname:"Gu",email:"onlychuan@gmail.com"},
                {firstname:"Andrew",lastname:"Jin",email:"jin@gmail.com"}];


  async addcontact(){
    const modal = await this.modalCtrl.create({
        component: AddPagePage,

    });

    modal.onDidDismiss().then(data =>{
      if(data.data["created"]){
        this.contacts.push({
          firstname: data.data["firstname"],
          lastname: data.data["lastname"],
          email: data.data["email"]
        });
      }
    });
  
    await modal.present();
  }

Delete(index){
  this.contacts.splice(index,1)
}

async Edit(index){
  let Edit = this.contacts[index]
  let modal = await this.modalCtrl.create({
    component: AddPagePage,
    componentProps: {"firstname": Edit.firstname,"lastname": Edit.lastname, "email":Edit.email}
  });
  modal.onDidDismiss()
    .then(data => {
      this.contacts[index] = data.data;
    });
    return modal.present();
   

}

}
interface contact{
  firstname: string;
  lastname: string;
  email: string;
}