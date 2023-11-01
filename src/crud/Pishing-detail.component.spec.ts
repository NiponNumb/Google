import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PishingDetailComponent} from './Pishing-detail.component';
 
describe('PishingDetailComponent', () => {
  let component: PishingDetailComponent;
  let fixture: ComponentFixture<PishingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PishingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PishingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});