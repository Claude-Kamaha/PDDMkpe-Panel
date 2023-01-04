import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynanicFormComponent } from './dynanic-form.component';

describe('DynanicFormComponent', () => {
  let component: DynanicFormComponent;
  let fixture: ComponentFixture<DynanicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynanicFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynanicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
