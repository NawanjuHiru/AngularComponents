import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  @Input() label = 'Label';
  @Input() placeholder = 'Type your message here.';
  @Input() disabled = false;
  @Input() focused = false;
  @Input() filled = false;
  @Input() error = '';
}
