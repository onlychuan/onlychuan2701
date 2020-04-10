import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

//function for back
  logout(){
    this.router.navigateByUrl('tab2');
  
  }

}
