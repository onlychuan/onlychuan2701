import { Component, OnInit } from '@angular/core';
import { DataileditPage} from '../datailedit/datailedit.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-studentdetil',
  templateUrl: './studentdetil.page.html',
  styleUrls: ['./studentdetil.page.scss'],
})
export class StudentdetilPage implements OnInit {
  showdetial:boolean

  constructor(private modalCtrl: ModalController) { }

  courses=[{coursename:"AInteractive App Development",courseid:"2701ICT",class:"N53 1.01",time:"12:00"},
  {coursename:"Software Frameworks",courseid:"3813ICT",class:"N26 10.1",time:"14:00"}];

  ngOnInit() {
  }


//link to modal page and add new function
  async add(){
    const modal = await this.modalCtrl.create({
      component:DataileditPage,
    })
    modal.onDidDismiss().then(data =>{
      this.courses.push(data.data)
    });
    await modal.present()
  }
//funcation for delte
  async delete(index){
    this.courses.splice(index,1)
  }

//edit function and pass the orginal data to modal page
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

show(index) {
  let show = this.courses[index]
  this.showdetial = true;
}

hide() {
  this.showdetial= false;
}

}
