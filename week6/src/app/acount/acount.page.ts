import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-acount',
  templateUrl: './acount.page.html',
  styleUrls: ['./acount.page.scss'],
})
export class AcountPage implements OnInit {
   
  constructor(private route: ActivatedRoute) { }
  firstName: String;
  ngOnInit() {
    this.firstName = this.route.snapshot.paramMap.get('firstName');
  }

}
