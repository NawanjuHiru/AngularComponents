import { Routes } from '@angular/router';
import { TextareaUiComponent } from './pages/textarea-ui/textarea-ui.component';

export const routes: Routes = [
  { path: '', redirectTo: 'textareas', pathMatch: 'full' },
  { path: 'textareas', component: TextareaUiComponent },
];
