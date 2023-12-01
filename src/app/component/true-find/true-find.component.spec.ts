import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFindComponent } from './true-find.component';

describe('TrueFindComponent', () => {
  let component: TrueFindComponent;
  let fixture: ComponentFixture<TrueFindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrueFindComponent]
    });
    fixture = TestBed.createComponent(TrueFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
