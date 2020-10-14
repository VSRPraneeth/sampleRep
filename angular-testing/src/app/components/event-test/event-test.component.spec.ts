import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventTestComponent } from './event-test.component';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add clicks when "Add Clicks button is clicked"', () => {
    const h3 = de.query(By.css('h3'));
    const btn = de.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.countClicks).toEqual(parseInt(h3.nativeElement.innerText));
  });
});
