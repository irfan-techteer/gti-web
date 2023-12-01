import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GTIComponent } from './gti.component';

describe('GTIComponent', () => {
  let component: GTIComponent;
  let fixture: ComponentFixture<GTIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GTIComponent]
    });
    fixture = TestBed.createComponent(GTIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
