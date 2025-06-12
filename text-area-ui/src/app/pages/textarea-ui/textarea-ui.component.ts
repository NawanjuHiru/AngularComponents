import { Component } from '@angular/core';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea-ui',
  templateUrl: './textarea-ui.component.html',
  standalone: true,
  imports: [CommonModule,TextareaComponent],
  styleUrls: ['./textarea-ui.component.css'],

})
export class TextareaUiComponent {
  errorMsg = 'Your one-time password must be 6 characters.';
  states = [
    { label: ':default', filled: false, focused: false, disabled: false },
    { label: ':focus-empty', filled: false, focused: true, disabled: false },
    { label: ':focus-filled', filled: true, focused: true, disabled: false },
    { label: ':filled', filled: true, focused: false, disabled: false },
    { label: ':disabled', filled: false, focused: false, disabled: true },
  ];
}
