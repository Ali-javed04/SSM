import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovelListingComponent } from './approvel-listing.component';

describe('ApprovelListingComponent', () => {
  let component: ApprovelListingComponent;
  let fixture: ComponentFixture<ApprovelListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovelListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovelListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
