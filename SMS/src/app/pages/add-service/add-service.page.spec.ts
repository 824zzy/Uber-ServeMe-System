import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddServicePage } from './add-service.page';

describe('AddServicePage', () => {
  let component: AddServicePage;
  let fixture: ComponentFixture<AddServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
