import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionComponent } from './leccion.component';

describe('LeccionComponent', () => {
  let component: LeccionComponent;
  let fixture: ComponentFixture<LeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
