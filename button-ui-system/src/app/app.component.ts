import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button-ui-system';
}
