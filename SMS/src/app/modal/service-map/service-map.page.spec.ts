import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceMapPage } from './service-map.page';

describe('ServiceMapPage', () => {
  let component: ServiceMapPage;
  let fixture: ComponentFixture<ServiceMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
