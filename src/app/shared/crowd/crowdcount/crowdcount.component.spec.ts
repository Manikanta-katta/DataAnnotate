import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdcountComponent } from './crowdcount.component';

describe('CrowdcountComponent', () => {
  let component: CrowdcountComponent;
  let fixture: ComponentFixture<CrowdcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowdcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
