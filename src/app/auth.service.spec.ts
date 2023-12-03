import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Storage } from '@ionic/storage-angular';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
     TestBed.configureTestingModule({
       imports: [
         HttpClientTestingModule,         
       ],
       providers: [
         AuthService,
         Storage,
       ]
     });
  });
 
  it('should be created', () => {
     const service: AuthService = TestBed.inject(AuthService);
     expect(service).toBeTruthy();
  });
 });