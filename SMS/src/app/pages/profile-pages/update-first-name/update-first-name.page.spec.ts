import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateFirstNamePage } from './update-first-name.page';

describe('UpdateFirstNamePage', () => {
  let component: UpdateFirstNamePage;
  let fixture: ComponentFixture<UpdateFirstNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFirstNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateFirstNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
