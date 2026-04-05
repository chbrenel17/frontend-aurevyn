import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTypes } from './browse-types';

describe('BrowseTypes', () => {
  let component: BrowseTypes;
  let fixture: ComponentFixture<BrowseTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
