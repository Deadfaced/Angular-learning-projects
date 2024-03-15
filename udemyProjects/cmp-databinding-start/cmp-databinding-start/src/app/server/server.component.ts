import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrl: 'server.component.css'
})
export class ServerComponent {
  @Input('srvElement') element: {type: string, name: string, content: string};
}
