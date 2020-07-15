import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcInventoryComponent } from './pc-inventory.component';

describe('PcInventoryComponent', () => {
  let component: PcInventoryComponent;
  let fixture: ComponentFixture<PcInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
