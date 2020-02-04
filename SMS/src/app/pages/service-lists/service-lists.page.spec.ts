import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceListsPage } from './service-lists.page';

describe('ServiceListsPage', () => {
  let component: ServiceListsPage;
  let fixture: ComponentFixture<ServiceListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceListsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
