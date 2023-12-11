import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBuisnessComponent } from './home-buisness.component';

describe('HomeBuisnessComponent', () => {
  let component: HomeBuisnessComponent;
  let fixture: ComponentFixture<HomeBuisnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBuisnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBuisnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
