import { Component, OnInit } from '@angular/core';
import { DataileditPage} from '../datailedit/datailedit.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-studentdetil',
  templateUrl: './studentdetil.page.html',
  styleUrls: ['./studentdetil.page.scss'],
})
export class StudentdetilPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  courses=[{coursename:"A",courseid:"2701ICT",class:"1@gmail.com",time:"12:00"},
  {coursename:"B",courseid:"3813ICT",class:"1@gmail.com",time:"12:00"}];

  ngOnInit() {
  }
  async add(){
    const modal = await this.modalCtrl.create({
      component:DataileditPage,
    })
    modal.onDidDismiss().then(data =>{
      this.courses.push(data.data)
    });
    await modal.present()
  }

  async delete(index){
    this.courses.splice(index,1)
  }

async edit(index){
 let edit = this.courses[index]
 let modal = await this.modalCtrl.create({
   component: DataileditPage,
   componentProps:{coursename:edit.coursename,courseid:edit.courseid,class:edit.class,time:edit.time}
 })
 modal.onDidDismiss()
 .then(data => {
   this.courses[index] = data.data;
 })
 return modal.present();
}

}
