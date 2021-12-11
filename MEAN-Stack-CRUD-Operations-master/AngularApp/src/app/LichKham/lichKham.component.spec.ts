import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichKhamComponent } from './lichKham.component';

describe('LichKhamComponent', () => {
  let component: LichKhamComponent;
  let fixture: ComponentFixture<LichKhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichKhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
