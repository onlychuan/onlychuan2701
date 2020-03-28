import { Component } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  clickCounter = 0;
  firstName:string = "";
  

  constructor(private router:Router) {
    this.router = router
  }

  countLogin() {
    this.clickCounter++;
  }

  login(){
    this.router.navigateByUrl('/acount/'  + this.firstName);
    this.countLogin();
  }

}
