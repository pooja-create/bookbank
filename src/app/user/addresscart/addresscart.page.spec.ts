import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddresscartPage } from './addresscart.page';

describe('AddresscartPage', () => {
  let component: AddresscartPage;
  let fixture: ComponentFixture<AddresscartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresscartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddresscartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
