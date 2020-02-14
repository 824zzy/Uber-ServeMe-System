import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivacySettingsPage } from './privacy-settings.page';

describe('PrivacySettingsPage', () => {
  let component: PrivacySettingsPage;
  let fixture: ComponentFixture<PrivacySettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacySettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacySettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
