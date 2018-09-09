import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekersOverviewComponent } from './seekers-overview.component';

describe('SeekersOverviewComponent', () => {
  let component: SeekersOverviewComponent;
  let fixture: ComponentFixture<SeekersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekersOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
