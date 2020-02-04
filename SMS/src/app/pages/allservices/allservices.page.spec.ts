import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllservicesPage } from './allservices.page';

describe('AllservicesPage', () => {
  let component: AllservicesPage;
  let fixture: ComponentFixture<AllservicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllservicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
