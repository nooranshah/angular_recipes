import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FormsModule } from '@angular/forms';

import { ReleaseFormComponent } from './release-form.component';

describe('ReleaseFormComponent', () => {
  let component: ReleaseFormComponent;
  let fixture: ComponentFixture<ReleaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
