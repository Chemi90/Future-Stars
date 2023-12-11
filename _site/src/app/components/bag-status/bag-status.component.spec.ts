import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagStatusComponent } from './bag-status.component';

describe('BagStatusComponent', () => {
  let component: BagStatusComponent;
  let fixture: ComponentFixture<BagStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
