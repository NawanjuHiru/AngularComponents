import { Component } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputRows = [
    {
      label: ':default',
      class: 'default',
      defaultValue: '',
      destructiveValue: '',
      disabled: false
    },
    {
      label: ':focus-empty',
      class: 'focus-empty',
      defaultValue: '',
      destructiveValue: '',
      disabled: false
    },
    {
      label: ':focus-filled',
      class: 'focus-filled',
      defaultValue: 'Email',
      destructiveValue: 'Email',
      disabled: false
    },
    {
      label: ':filled',
      class: 'filled',
      defaultValue: 'Email',
      destructiveValue: 'Email',
      disabled: false
    },
    {
      label: ':disabled',
      class: 'disabled',
      defaultValue: 'Email',
      destructiveValue: 'Email',
      disabled: true
    }
  ];
}
