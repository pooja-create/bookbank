import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageBooksPage } from './manage-books.page';

describe('ManageBooksPage', () => {
  let component: ManageBooksPage;
  let fixture: ComponentFixture<ManageBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
