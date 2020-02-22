import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MePage } from './me.page';

describe('MePage', () => {
  let component: MePage;
  let fixture: ComponentFixture<MePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
