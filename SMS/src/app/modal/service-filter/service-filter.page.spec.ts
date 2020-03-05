import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceFilterPage } from './service-filter.page';

describe('ServiceFilterPage', () => {
  let component: ServiceFilterPage;
  let fixture: ComponentFixture<ServiceFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
