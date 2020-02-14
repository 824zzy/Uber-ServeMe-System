import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationSettingsPage } from './location-settings.page';

describe('LocationSettingsPage', () => {
  let component: LocationSettingsPage;
  let fixture: ComponentFixture<LocationSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
