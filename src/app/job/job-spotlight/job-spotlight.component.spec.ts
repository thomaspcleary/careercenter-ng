import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSpotlightComponent } from './job-spotlight.component';

describe('JobSpotlightComponent', () => {
  let component: JobSpotlightComponent;
  let fixture: ComponentFixture<JobSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
