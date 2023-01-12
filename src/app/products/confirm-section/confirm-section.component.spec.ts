import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSectionComponent } from './confirm-section.component';

describe('ConfirmSectionComponent', () => {
  let component: ConfirmSectionComponent;
  let fixture: ComponentFixture<ConfirmSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
