import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAdd } from './team-add';

describe('TeamAdd', () => {
  let component: TeamAdd;
  let fixture: ComponentFixture<TeamAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
