import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentdetilPage } from './studentdetil.page';

describe('StudentdetilPage', () => {
  let component: StudentdetilPage;
  let fixture: ComponentFixture<StudentdetilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentdetilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
