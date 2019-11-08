import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GyminfoComponent } from './gyminfo.component';

describe('GyminfoComponent', () => {
  let component: GyminfoComponent;
  let fixture: ComponentFixture<GyminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GyminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
