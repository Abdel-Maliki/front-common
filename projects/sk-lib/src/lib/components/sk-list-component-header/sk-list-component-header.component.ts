import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'sk-list-component-header',
  templateUrl: './sk-list-component-header.component.html',
  styleUrls: ['./sk-list-component-header.component.css']
})
export class SkListComponentHeaderComponent implements OnInit {

  @Input() leftTemplate: TemplateRef<any> | undefined;
  @Input() centerTemplate: TemplateRef<any> | undefined;
  @Input() rightTemplate: TemplateRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}
