import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServicesComponent } from './section-services.component';

describe('SectionServicesComponent', () => {
  let component: SectionServicesComponent;
  let fixture: ComponentFixture<SectionServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
