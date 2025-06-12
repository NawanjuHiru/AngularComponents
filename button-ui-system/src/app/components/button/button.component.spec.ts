import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ButtonComponent] // Add CommonModule here
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should disable the button when state is "disabled"', () => {
    component.state = 'disabled';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTrue();
  });
});