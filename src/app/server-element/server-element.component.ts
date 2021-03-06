import { Component, OnInit, Input, ViewEncapsulation,
OnChanges, SimpleChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked,
OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //encapsulation: ViewEncapsulation, this causes errors :/
})
export class ServerElementComponent implements OnInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  //executes on every change detection run
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngOnInit() {
    console.log('ngOnInIt called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
      console.log('ngAfterViewInit called');
      console.log(this.header.nativeElement.textContent);
    }

  ngAfterViewChecked() {
      console.log('ngAfterViewChecked called');
    }

    ngOnDestroy() {
          console.log('ngOnDestroy called');
        }

}
