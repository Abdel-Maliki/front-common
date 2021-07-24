import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemePalette} from '@angular/material/core/common-behaviors/color';

@Component({
  selector: 'sk-add-button',
  templateUrl: './sk-add-button.component.html',
  styleUrls: ['./sk-add-button.component.css']
})
export class SkAddButtonComponent implements OnInit {

  @Input() color: ThemePalette = 'primary';
  @Input() title = 'Ajouter';
  @Input() class = '';
  @Input() disabled = false;
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
