import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionComponent } from './main-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureModule } from 'src/app/feature/feature.module';
import { AuthService } from 'src/app/shared/services/auth.service';

describe('MainSectionComponent', () => {
  let component: MainSectionComponent;
  let fixture: ComponentFixture<MainSectionComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, FeatureModule],
      declarations: [MainSectionComponent],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(MainSectionComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isAuthorize property to false', () => {
    expect(component.isAuthorize).toBeFalse();
  });

  it('should update isAuthorize when triggered', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    fixture.detectChanges();
    expect(component.isAuthorize).toBeTrue();

    authService.loginEvent.next();
    expect(component.isAuthorize).toBeFalse();
  });
});
