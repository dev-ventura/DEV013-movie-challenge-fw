import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocksComponent } from './mocks.component';

describe('MocksComponent', () => {
  let component: MocksComponent;
  let fixture: ComponentFixture<MocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
