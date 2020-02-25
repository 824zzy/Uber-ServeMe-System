import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppliancesPage } from './appliances.page';

describe('AppliancesPage', () => {
  let component: AppliancesPage;
  let fixture: ComponentFixture<AppliancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppliancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
