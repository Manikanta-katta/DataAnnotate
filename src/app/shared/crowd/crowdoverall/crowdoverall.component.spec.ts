import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdoverallComponent } from './crowdoverall.component';

describe('CrowdoverallComponent', () => {
  let component: CrowdoverallComponent;
  let fixture: ComponentFixture<CrowdoverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdoverallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowdoverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
