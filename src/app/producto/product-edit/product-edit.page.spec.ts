//product-edir.page.spec.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductAddPage } from '../product-add/product-add.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductServiceService } from '../product-service.service';

describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddPage],
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule
      providers: [ProductServiceService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
