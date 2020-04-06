import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-datailedit',
  templateUrl: './datailedit.page.html',
  styleUrls: ['./datailedit.page.scss'],
})
export class DataileditPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  coursename : string = "";
  courseid : string = "";
  class : string = "";
  time : string = "";
 

  ngOnInit() {
  }

  async create(){
    const modal = await this.modalCtrl.dismiss({coursename:this.coursename,courseid:this.courseid,class:this.class, time:this.time}); 
}



}
