import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookdetailPage } from './bookdetail.page';

describe('BookdetailPage', () => {
  let component: BookdetailPage;
  let fixture: ComponentFixture<BookdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
