import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmployeersComponent } from './count-employeers.component';

describe('CountEmployeersComponent', () => {
  let component: CountEmployeersComponent;
  let fixture: ComponentFixture<CountEmployeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountEmployeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEmployeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
