//register.page.spect.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';
// Asegúrate de importar AuthService desde la ubicación correcta

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicStorageModule.forRoot()],
      providers: [AuthService], // Asegúrate de proporcionar AuthService si es necesario
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
