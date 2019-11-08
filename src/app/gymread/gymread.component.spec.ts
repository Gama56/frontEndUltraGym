import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymreadComponent } from './gymread.component';

describe('GymreadComponent', () => {
  let component: GymreadComponent;
  let fixture: ComponentFixture<GymreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
