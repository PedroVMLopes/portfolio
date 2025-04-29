import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionBoxesComponent } from './description-boxes.component';

describe('DescriptionBoxesComponent', () => {
  let component: DescriptionBoxesComponent;
  let fixture: ComponentFixture<DescriptionBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionBoxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
