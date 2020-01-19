import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibleDeviceComponent } from './compatible-device.component';

describe('CompatibleDeviceComponent', () => {
  let component: CompatibleDeviceComponent;
  let fixture: ComponentFixture<CompatibleDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompatibleDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompatibleDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
