import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTechnologiesComponent } from './main-technologies.component';

describe('MainTechnologiesComponent', () => {
  let component: MainTechnologiesComponent;
  let fixture: ComponentFixture<MainTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTechnologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
