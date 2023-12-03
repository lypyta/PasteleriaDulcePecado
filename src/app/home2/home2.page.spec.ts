import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Home2Page } from './home2.page';
import { AuthService } from '../auth.service';

describe('Home2Page', () => {
 let page: Home2Page;

 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Home2Page],
      providers: [Storage, NavController, AuthService]
    }).compileComponents();

    page = TestBed.createComponent(Home2Page).componentInstance;
 });

 it('should create the home2 page', () => {
    expect(page).toBeTruthy();
 });
});