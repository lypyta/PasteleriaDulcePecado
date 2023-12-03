//auth.guard.spec.ts
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        IonicStorageModule.forRoot(),
      ],
      providers: [
        AuthGuard,
        AuthService, // Asegúrate de agregar AuthService u otros servicios necesarios aquí
      ],
    }).compileComponents();

    guard = TestBed.inject(AuthGuard);
  }));

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
