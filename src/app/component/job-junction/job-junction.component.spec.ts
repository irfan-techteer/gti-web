import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobJunctionComponent } from './job-junction.component';

describe('JobJunctionComponent', () => {
  let component: JobJunctionComponent;
  let fixture: ComponentFixture<JobJunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobJunctionComponent]
    });
    fixture = TestBed.createComponent(JobJunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
