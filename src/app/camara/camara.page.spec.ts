// Importa las clases necesarias para configurar y ejecutar pruebas unitarias en Angular.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente CamaraPage que se va a probar.
import { CamaraPage } from './camara.page';

// Descripción de las pruebas para el componente CamaraPage.
describe('CamaraPage', () => {
  // Variables para contener una instancia del componente y su fixture (entorno de pruebas).
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  // Configura el entorno de pruebas antes de cada prueba.
  beforeEach(async() => {
    // Configura un módulo de pruebas con TestBed.
    fixture = TestBed.createComponent(CamaraPage);
    // Obtiene una instancia del componente que se va a probar.
    component = fixture.componentInstance;
    // Realiza una detección de cambios para asegurarse de que el componente y la vista estén sincronizados.
    fixture.detectChanges();
  });

  // Prueba para verificar si el componente se crea correctamente.
  it('should create', () => {
    // Se espera que la instancia del componente no sea nula, lo que indica que el componente se ha creado correctamente.
    expect(component).toBeTruthy();
  });
});
