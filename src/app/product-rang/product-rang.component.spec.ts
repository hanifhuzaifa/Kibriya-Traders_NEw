import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRangComponent } from './product-rang.component';

describe('ProductRangComponent', () => {
  let component: ProductRangComponent;
  let fixture: ComponentFixture<ProductRangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
