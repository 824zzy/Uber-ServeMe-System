import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorPage } from './vendor.page';

describe('VendorPage', () => {
  let component: VendorPage;
  let fixture: ComponentFixture<VendorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
