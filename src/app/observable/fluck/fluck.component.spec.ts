import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluckComponent } from './fluck.component';

describe('FluckComponent', () => {
  let component: FluckComponent;
  let fixture: ComponentFixture<FluckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
