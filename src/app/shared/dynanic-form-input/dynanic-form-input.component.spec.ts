import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynanicFormInputComponent } from './dynanic-form-input.component';

describe('DynanicFormInputComponent', () => {
  let component: DynanicFormInputComponent;
  let fixture: ComponentFixture<DynanicFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynanicFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynanicFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
