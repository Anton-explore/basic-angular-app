import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionComponent } from './main-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureModule } from 'src/app/feature/feature.module';

describe('MainSectionComponent', () => {
  let component: MainSectionComponent;
  let fixture: ComponentFixture<MainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, FeatureModule],
      declarations: [MainSectionComponent],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true,
    }).compileComponents();

    fixture = TestBed.createComponent(MainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
