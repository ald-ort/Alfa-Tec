import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvl1Component } from './nvl1.component';

describe('Nvl1Component', () => {
  let component: Nvl1Component;
  let fixture: ComponentFixture<Nvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nvl1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
