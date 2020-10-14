import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ProductListService } from 'src/app/services/product-list.service';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let de: DebugElement;
  let productListService: ProductListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [ProductListService],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productListService = TestBed.inject(ProductListService);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should create productListService', () => {
    expect(productListService).toBeTruthy();
  });

  fit('should filter product List(done)', (done) => {
    component.searchText = 'Milk';
    let productSpy = spyOn(
      productListService,
      'filterProductList'
    ).and.callThrough();
    component.filterProductList({});
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      //check the first value
      const value = de.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    });
  });

  fit('should filter product List (async)', async(() => {
    component.searchText = 'Milk';
    let productSpy = spyOn(productListService, 'filterProductList')
      .withArgs('Milk')
      .and.callThrough();
    component.filterProductList({});
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      //check the first value
      const value = de.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
    });
  }));
});
