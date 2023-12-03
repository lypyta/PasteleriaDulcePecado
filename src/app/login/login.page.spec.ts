//login.page.spect.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicStorageModule.forRoot()], // Asegúrate de incluir IonicStorageModule
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
