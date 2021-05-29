import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltokensComponent } from './totaltokens.component';

describe('TotaltokensComponent', () => {
  let component: TotaltokensComponent;
  let fixture: ComponentFixture<TotaltokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaltokensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaltokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
