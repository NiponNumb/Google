import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglepasswordComponent } from './googlepassword.component';

describe('GooglepasswordComponent', () => {
  let component: GooglepasswordComponent;
  let fixture: ComponentFixture<GooglepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglepasswordComponent]
    });
    fixture = TestBed.createComponent(GooglepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
