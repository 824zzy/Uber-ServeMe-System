import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceRequestPage } from './place-request.page';

describe('PlaceRequestPage', () => {
  let component: PlaceRequestPage;
  let fixture: ComponentFixture<PlaceRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
