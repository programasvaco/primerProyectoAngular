import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbHeroesComponent } from './tb-heroes.component';

describe('TbHeroesComponent', () => {
  let component: TbHeroesComponent;
  let fixture: ComponentFixture<TbHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TbHeroesComponent]
    });
    fixture = TestBed.createComponent(TbHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
