import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PishingComponent} from './Pishing.component';
 
describe('PishingComponent', () => {
  let component: PishingComponent;
  let fixture: ComponentFixture<PishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PishingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});