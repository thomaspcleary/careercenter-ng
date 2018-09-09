import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobFormComponent } from './view-job-form.component';

describe('ViewJobFormComponent', () => {
  let component: ViewJobFormComponent;
  let fixture: ComponentFixture<ViewJobFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
