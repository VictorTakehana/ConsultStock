import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCryptoComponent } from './home-crypto.component';

describe('HomeCryptoComponent', () => {
  let component: HomeCryptoComponent;
  let fixture: ComponentFixture<HomeCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCryptoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
