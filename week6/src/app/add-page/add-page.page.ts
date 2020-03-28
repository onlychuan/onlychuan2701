import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  firstname : string = "";
  lastname : string = "";
  email : string = "";


  async Exit(){
    const modal = await this.modalCtrl.getTop();
    modal.dismiss({"created": false})
}
async AddContact(){
  const modal = await this.modalCtrl.getTop();
  modal.dismiss({
    "created": true,
    "firstname": this.firstname,
    "lastname": this.lastname,
    "email": this.email
  });
}

  ngOnInit() {
  }

}
