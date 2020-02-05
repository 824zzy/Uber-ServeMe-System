import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestloginPage } from './testlogin.page';

describe('TestloginPage', () => {
  let component: TestloginPage;
  let fixture: ComponentFixture<TestloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
