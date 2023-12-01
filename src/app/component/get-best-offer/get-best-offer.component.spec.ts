import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBestOfferComponent } from './get-best-offer.component';

describe('GetBestOfferComponent', () => {
  let component: GetBestOfferComponent;
  let fixture: ComponentFixture<GetBestOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetBestOfferComponent]
    });
    fixture = TestBed.createComponent(GetBestOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
