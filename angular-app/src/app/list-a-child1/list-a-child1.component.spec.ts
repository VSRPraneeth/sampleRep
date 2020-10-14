import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAChild1Component } from './list-a-child1.component';

describe('ListAChild1Component', () => {
  let component: ListAChild1Component;
  let fixture: ComponentFixture<ListAChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
