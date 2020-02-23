import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorRequestPage } from './vendor-request.page';

describe('VendorRequestPage', () => {
  let component: VendorRequestPage;
  let fixture: ComponentFixture<VendorRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
