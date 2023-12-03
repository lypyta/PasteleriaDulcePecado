//product-detail.page.spec.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductDetailPage } from './product-detail.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router'; // Importa ActivatedRoute y convertToParamMap
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductServiceService } from '../product-service.service';

describe('ProductDetailPage', () => {
  let component: ProductDetailPage;
  let fixture: ComponentFixture<ProductDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailPage],
      imports: [HttpClientTestingModule],
      providers: [
        ProductServiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '1' }), // Cambia 'yourProductIdHere' con el ID real que esperas
            },
          },
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
