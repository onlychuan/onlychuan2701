import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavimpsPage } from './navimps.page';

describe('NavimpsPage', () => {
  let component: NavimpsPage;
  let fixture: ComponentFixture<NavimpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavimpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavimpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
