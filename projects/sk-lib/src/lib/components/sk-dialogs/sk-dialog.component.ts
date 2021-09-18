import {Component, Inject, OnInit, TemplateRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'sk-dialog',
  templateUrl: './sk-dialog.component.html',
  styleUrls: ['./sk-dialog.component.scss']
})
export class SkDialogComponent implements OnInit {
  private projectOption = {saveTitle: 'saveTitle', cancelTitle: 'cancelTitle'};

  constructor(public dialogRef: MatDialogRef<SkDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogComponentData) {
  }

  ngOnInit(): void {
  }

  get title(): string | null {
    return this.data?.title ?? null;
  }

  get dialogContent(): TemplateRef<any> | null {
    return this?.data.dialogContent ?? null;
  }

  get dialogContentString(): string | null {
    return this?.data.dialogContentString ?? null;
  }

  get dialogFullContent(): TemplateRef<any> | null {
    return this?.data.dialogFullContent ?? null;
  }

  get displayCancelButton(): boolean {
    return this.data
    && this.data.displayCancelButton !== null
    && this.data.displayCancelButton !== undefined
      ? this.data.displayCancelButton
      : true;
  }

  get displayValidateButton(): boolean {
    return this.data
    && this.data.displayValidateButton !== null
    && this.data.displayValidateButton !== undefined
      ? this.data.displayValidateButton
      : true;
  }

  get cancelTitle(): string {
    return this.data && this.data.cancelTitle ? this.data.cancelTitle : this.projectOption.cancelTitle;
  }

  get validateTitle(): string {
    return this.data && this.data.validateTitle ? this.data.validateTitle : this.projectOption.saveTitle;
  }

  get disabledValidateButton(): boolean {
    return this.data && this.data.disabledValidateButton ? this.data.disabledValidateButton : false;
  }

  get disabledCancelButton(): boolean {
    return this.data && this.data.disabledCancelButton ? this.data.disabledCancelButton : false;
  }

  cancelEvent(): void {
    this.data && this.data.cancelEvent ? this.data.cancelEvent() : this.dialogRef.close(false);
  }

  validateEvent(): void {
    this.data && this.data.validateEvent ? this.data.validateEvent() : this.dialogRef.close(true);
  }
}

export interface DialogComponentData {
  title?: string;
  dialogContent?: TemplateRef<any>;
  dialogContentString?: string;
  dialogFullContent?: TemplateRef<any>;
  displayCancelButton?: boolean;
  displayValidateButton?: boolean;
  cancelTitle?: string;
  validateTitle?: string;
  disabledValidateButton?: boolean;
  disabledCancelButton?: boolean;
  cancelEvent?: () => any;
  validateEvent?: () => any;
}
