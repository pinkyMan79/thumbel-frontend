import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCreationPageComponent } from './forum-creation-page.component';

describe('ForumCreationPageComponent', () => {
  let component: ForumCreationPageComponent;
  let fixture: ComponentFixture<ForumCreationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumCreationPageComponent]
    });
    fixture = TestBed.createComponent(ForumCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
