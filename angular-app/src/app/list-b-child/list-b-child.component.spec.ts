import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBChildComponent } from './list-b-child.component';

describe('ListBChildComponent', () => {
  let component: ListBChildComponent;
  let fixture: ComponentFixture<ListBChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
