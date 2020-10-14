import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAChildComponent } from './list-a-child.component';

describe('ListAChildComponent', () => {
  let component: ListAChildComponent;
  let fixture: ComponentFixture<ListAChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
