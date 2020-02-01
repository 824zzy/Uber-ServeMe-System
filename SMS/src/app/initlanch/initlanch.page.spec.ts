import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitlanchPage } from './initlanch.page';

describe('InitlanchPage', () => {
  let component: InitlanchPage;
  let fixture: ComponentFixture<InitlanchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitlanchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitlanchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
