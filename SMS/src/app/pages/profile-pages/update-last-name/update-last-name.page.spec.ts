import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateLastNamePage } from './update-last-name.page';

describe('UpdateLastNamePage', () => {
  let component: UpdateLastNamePage;
  let fixture: ComponentFixture<UpdateLastNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLastNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateLastNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
