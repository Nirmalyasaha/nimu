import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailallComponent } from './detailall.component';

describe('DetailallComponent', () => {
  let component: DetailallComponent;
  let fixture: ComponentFixture<DetailallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
