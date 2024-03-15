import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: 'add-server.component.html',
  styleUrl: 'add-server.component.css'
})
export class AddServerComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer(){
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
  onAddBlueprint(){
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}
