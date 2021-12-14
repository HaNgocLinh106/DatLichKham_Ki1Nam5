import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSDichVuComponent } from './BSDichVu.component';

describe('BSDichVuComponent', () => {
  let component: BSDichVuComponent;
  let fixture: ComponentFixture<BSDichVuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSDichVuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSDichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
