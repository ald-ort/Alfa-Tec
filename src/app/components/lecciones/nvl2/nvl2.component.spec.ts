import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvl2Component } from './nvl2.component';

describe('Nvl2Component', () => {
  let component: Nvl2Component;
  let fixture: ComponentFixture<Nvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nvl2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
