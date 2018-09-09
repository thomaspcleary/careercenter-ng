import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResumeFormComponent } from './view-resume-form.component';

describe('ViewResumeFormComponent', () => {
  let component: ViewResumeFormComponent;
  let fixture: ComponentFixture<ViewResumeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResumeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
