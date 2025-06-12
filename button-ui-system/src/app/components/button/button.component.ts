import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'link-secondary' = 'primary';
  @Input() state: 'default' | 'hover' | 'focus' | 'disabled' | 'loading' = 'default';
  @Input() destructive: boolean = false;
  @Input() loading: boolean = false;
}
