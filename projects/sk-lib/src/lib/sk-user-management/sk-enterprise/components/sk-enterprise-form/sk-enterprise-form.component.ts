import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {SkEnterpriseModel} from '../../sk-enterprise-model';
import {Store} from '@ngxs/store';
import {SKConfigState, SkFormConfig} from 'sk-core';
import {
  SKCreateEnterpriseAction,
  SKEnterpriseModelState,
  SKEnterpriseModelStateModel,
  SKUpdateEnterpriseAction
} from '../../sk-enterprise-state';
import {finalize, map} from 'rxjs/operators';

@Component({
  selector: 'sk-sk-enterprise-form',
  templateUrl: './sk-enterprise-form.component.html',
  styleUrls: ['./sk-enterprise-form.component.css']
})
export class SkEnterpriseFormComponent implements OnInit {
  form: FormGroup | undefined;
  entity: SkEnterpriseModel = this.store.selectSnapshot(SKEnterpriseModelState.currentSelector) || new SkEnterpriseModel();
  formConfig: SkFormConfig = this.store.selectSnapshot(SKConfigState.formSelector);
  disableButton = false;

  constructor(protected store: Store, protected formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm(): void {
    const target = Object
      .keys(this.entity)
      .map((value: any) => value as keyof SkEnterpriseModel)
      .reduce<SkEnterpriseModel>((pr: SkEnterpriseModel, cu: keyof SkEnterpriseModel) => {
        pr[cu] = this.entity[cu];
        return pr;
      }, new SkEnterpriseModel());

    const source = {
      name: [this.entity.name, [
        Validators.required,
        Validators.maxLength(this.formConfig.validators.maxLength),
        Validators.minLength(this.formConfig.validators.minLength),
      ]],
      email: [this.entity.email, [Validators.email]],
      address: [this.entity.address],
      tel: [this.entity.tel],
      description: [this.entity.description]
    };
    this.form = this.formBuilder.group(Object.assign(target, source));
  }

  saveOrUpdate(): void {
    this.disableButton = true;
    !!this.entity.id && this.entity.id > 0 ? this.update() : this.save();
  }

  save(): void {
    this.store
      .dispatch(new SKCreateEnterpriseAction({entity: this.form?.getRawValue()}))
      .pipe(
        map(() => this.stateSelector()),
        finalize(() => this.disableButton = false),
      )
      .subscribe(value => {
        console.log('Class: SkEnterpriseFormComponent, Function: , Line 68 value(): '
          , value);

        if (!value.actionsError || !value.actionsError.create || !value.actionsError.create.exist) {
          this.buildForm();
        }
      }, error => console.log('Class: SkEnterpriseFormComponent, Function: , Line 74 error(): '
        , error));
  }


  update(): void {
    this.store.dispatch(new SKUpdateEnterpriseAction({
      entity: this.form?.getRawValue(),
      id: this.entity.id
    }))
      .pipe(
        map(() => this.stateSelector()),
        finalize(() => this.disableButton = false),
      )
      .subscribe(value => {
          console.log('Class: SkEnterpriseFormComponent, Function: , Line 87 value(): '
            , value);
        },
        error => console.log('Class: SkEnterpriseFormComponent, Function: , Line 83 error(): ', error));
  }

  stateSelector(): SKEnterpriseModelStateModel {
    return this.store.selectSnapshot(SKEnterpriseModelState.selector);
  }

}
