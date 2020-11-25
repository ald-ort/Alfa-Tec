import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvl3Component } from './nvl3.component';

describe('Nvl3Component', () => {
  let component: Nvl3Component;
  let fixture: ComponentFixture<Nvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nvl3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
