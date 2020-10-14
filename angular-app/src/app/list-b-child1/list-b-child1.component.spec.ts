import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBChild1Component } from './list-b-child1.component';

describe('ListBChild1Component', () => {
  let component: ListBChild1Component;
  let fixture: ComponentFixture<ListBChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
