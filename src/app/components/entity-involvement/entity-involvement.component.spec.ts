import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInvolvementComponent } from './entity-involvement.component';

describe('EntityInvolvementComponent', () => {
  let component: EntityInvolvementComponent;
  let fixture: ComponentFixture<EntityInvolvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityInvolvementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityInvolvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
