import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BestPracticeComponent } from "./best-practice.component";
import { BestPracticeService } from "./best-practice.service";

describe("BestPracticeComponent", () => {
  let component: BestPracticeComponent;
  let fixture: ComponentFixture<BestPracticeComponent>;
  let service: BestPracticeService;


  beforeEach(() => {
    service = new BestPracticeService();
  });

  afterEach(() => {
    service = null
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BestPracticeComponent],


    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should test the get value function", ()=> {
    const val1= component.getValue();
    expect(val1).toEqual(0)
    component.setValue(8);
    const val2= component.getValue();
    expect(val2).toEqual(8)

  })

  it("should test the double value function", () => {
    const x = 4;
    const double = component.doubleVal(x)
    expect(double).toEqual(x*2)
  })


  it("should test multiplyX function", ()=> {
    const y=3
    const m= component.multiplyX(3)
    expect(m).toEqual(y*2+1)
  })

});
