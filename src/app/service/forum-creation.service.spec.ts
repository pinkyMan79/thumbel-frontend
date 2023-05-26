import { TestBed } from '@angular/core/testing';

import { ForumCreationService } from './forum-creation.service';

describe('ForumCreationService', () => {
  let service: ForumCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
