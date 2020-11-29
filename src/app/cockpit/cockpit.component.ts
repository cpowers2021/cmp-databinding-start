import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //<> is a generic type
  //@Input for properties
  //() for EventEmitter object
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; //name of local reference in string OR CockpitComponent
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
  this.serverCreated.emit({serverName: nameInput.value,
  serverContent: this.serverContentInput.nativeElement.value}); //nativeElement = element type
//       this.serverElements.push({
//         type: 'server',
//         name: this.newServerName,
//         content: this.newServerContent
//       });
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value});
//       this.serverElements.push({
//         type: 'blueprint',
//         name: this.newServerName,
//         content: this.newServerContent
//       });
    }

}
