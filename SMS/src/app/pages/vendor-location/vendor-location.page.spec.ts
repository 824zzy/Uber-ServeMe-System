import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorLocationPage } from './vendor-location.page';

describe('VendorLocationPage', () => {
  let component: VendorLocationPage;
  let fixture: ComponentFixture<VendorLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
