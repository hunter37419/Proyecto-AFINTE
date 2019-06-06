import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportacionXlxComponent } from './importacion-xlx.component';

describe('ImportacionXlxComponent', () => {
  let component: ImportacionXlxComponent;
  let fixture: ComponentFixture<ImportacionXlxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportacionXlxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportacionXlxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
