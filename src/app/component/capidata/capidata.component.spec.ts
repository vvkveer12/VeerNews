import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapidataComponent } from './capidata.component';

describe('CapidataComponent', () => {
  let component: CapidataComponent;
  let fixture: ComponentFixture<CapidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapidataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
