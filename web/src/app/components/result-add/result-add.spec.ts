import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAdd } from './result-add';

describe('ResultAdd', () => {
  let component: ResultAdd;
  let fixture: ComponentFixture<ResultAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
