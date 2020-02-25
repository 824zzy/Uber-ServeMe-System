import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectricalPage } from './electrical.page';

describe('ElectricalPage', () => {
  let component: ElectricalPage;
  let fixture: ComponentFixture<ElectricalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectricalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
