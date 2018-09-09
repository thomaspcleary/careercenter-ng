import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedResumeSearchesComponent } from './saved-resume-searches.component';

describe('SavedResumeSearchesComponent', () => {
  let component: SavedResumeSearchesComponent;
  let fixture: ComponentFixture<SavedResumeSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedResumeSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedResumeSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
