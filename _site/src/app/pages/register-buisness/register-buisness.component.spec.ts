import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBuisnessComponent } from './register-buisness.component';

describe('RegisterBuisnessComponent', () => {
  let component: RegisterBuisnessComponent;
  let fixture: ComponentFixture<RegisterBuisnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBuisnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBuisnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
send("submit") {
  this.router.navigate(['/register-success']);
}
