import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersOverviewComponent } from './employers-overview.component';

describe('EmployersOverviewComponent', () => {
  let component: EmployersOverviewComponent;
  let fixture: ComponentFixture<EmployersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
