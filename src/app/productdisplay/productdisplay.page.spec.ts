import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductdisplayPage } from './productdisplay.page';

describe('ProductdisplayPage', () => {
  let component: ProductdisplayPage;
  let fixture: ComponentFixture<ProductdisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductdisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
