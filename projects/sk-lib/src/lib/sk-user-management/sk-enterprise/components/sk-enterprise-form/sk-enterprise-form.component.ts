import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {SkEnterpriseModel} from '../../sk-enterprise-model';
import {Store} from '@ngxs/store';
import {SKConfigState, SkFormConfig, SkServiceData} from 'sk-core';
import {
  SKCreateAllEnterpriseAction,
  SKCreateAndGetEnterpriseAction,
  SKCreateEnterpriseAction,
  SKEnterpriseModelState,
  SKEnterpriseModelStateModel, SKUpdateAllEnterpriseAction, SKUpdateAndGetEnterpriseAction, SKUpdateEnterpriseAction
} from '../../sk-enterprise-state';
import {SkAbstractFormAction, SkAbstractFormComponent} from '../../../../abstract';
import {Router} from '@angular/router';

@Component({
  selector: 'sk-sk-enterprise-form',
  templateUrl: './sk-enterprise-form.component.html',
  styleUrls: ['./sk-enterprise-form.component.css']
})
export class SkEnterpriseFormComponent extends SkAbstractFormComponent<SkEnterpriseModel, SKEnterpriseModelStateModel> implements OnInit {
  form: FormGroup | undefined;
  entity: SkEnterpriseModel = this.store.selectSnapshot(SKEnterpriseModelState.currentSelector) || new SkEnterpriseModel();
  formConfig: SkFormConfig = this.store.selectSnapshot(SKConfigState.formSelector);
  disableButton = false;

  constructor(store: Store,
              serviceData: SkServiceData,
              protected router: Router,
              protected formBuilder: FormBuilder) {
    super(store, serviceData);
  }

  state(): SKEnterpriseModelStateModel {
    return this.store.selectSnapshot(SKEnterpriseModelState.selector);
  }

  get actions(): SkAbstractFormAction<SkEnterpriseModel> {
    return {
      create: (entity: SkEnterpriseModel, others) => new SKCreateEnterpriseAction({entity, others}),
      createAndGet: ((entity, pagination, others) => new SKCreateAndGetEnterpriseAction({entity, pagination, others})),
      createAll: (entities: SkEnterpriseModel[], others) => new SKCreateAllEnterpriseAction({entities, others}),

      update: (entity: SkEnterpriseModel, id, others) => new SKUpdateEnterpriseAction({entity, id, others}),
      updateAndGet: ((entity, id, pagination, others) => new SKUpdateAndGetEnterpriseAction({entity, id, pagination, others})),
      updateAll: (entities: SkEnterpriseModel[], others) => new SKUpdateAllEnterpriseAction({entities, others})
    };
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

  update(): Promise<SkEnterpriseModel> {
    return super.update(this.form?.getRawValue(), this.entity.id, () => this.router.navigate(['../../']).then(), this.emptyFunction());
  }

  create(): Promise<SkEnterpriseModel> {
    return super.create(this.form?.getRawValue(), () => this.buildForm(), this.emptyFunction());
  }
}
