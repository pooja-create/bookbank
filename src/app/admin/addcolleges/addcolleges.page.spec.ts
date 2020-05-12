import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcollegesPage } from './addcolleges.page';

describe('AddcollegesPage', () => {
  let component: AddcollegesPage;
  let fixture: ComponentFixture<AddcollegesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcollegesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcollegesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
