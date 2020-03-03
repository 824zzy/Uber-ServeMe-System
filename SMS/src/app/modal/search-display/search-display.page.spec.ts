import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchDisplayPage } from './search-display.page';

describe('SearchDisplayPage', () => {
  let component: SearchDisplayPage;
  let fixture: ComponentFixture<SearchDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
