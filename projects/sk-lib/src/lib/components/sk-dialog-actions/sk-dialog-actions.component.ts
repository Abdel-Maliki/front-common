import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'sk-actions',
    templateUrl: './sk-dialog-actions.component.html',
    styleUrls: ['./sk-dialog-actions.component.scss']
})
export class SkDialogActionsComponent implements OnInit {

  private projectOption = {saveTitle: 'saveTitle', cancelTitle: 'cancelTitle'};

  @Input() displayCancelButton = true;
    @Input() displayValidateButton = true;
    @Input() disabledCancelButton = false;
    @Input() disabledValidateButton = false;
    @Input() validateTitle: string = this.projectOption.saveTitle;
    @Input() cancelTitle: string = this.projectOption.cancelTitle;

    @Output() cancelAction: EventEmitter<void> = new EventEmitter<void>();
    @Output() validateAction: EventEmitter<void> = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

}
