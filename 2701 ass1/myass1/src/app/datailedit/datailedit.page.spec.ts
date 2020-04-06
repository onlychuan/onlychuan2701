import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataileditPage } from './datailedit.page';

describe('DataileditPage', () => {
  let component: DataileditPage;
  let fixture: ComponentFixture<DataileditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataileditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataileditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
