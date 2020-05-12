import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminBookPage } from './admin-book.page';

describe('AdminBookPage', () => {
  let component: AdminBookPage;
  let fixture: ComponentFixture<AdminBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
