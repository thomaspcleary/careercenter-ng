import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveResumeComponent } from './save-resume.component';

describe('SaveResumeComponent', () => {
  let component: SaveResumeComponent;
  let fixture: ComponentFixture<SaveResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
