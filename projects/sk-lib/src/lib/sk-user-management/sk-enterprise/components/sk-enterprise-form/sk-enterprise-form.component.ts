import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {SkEnterpriseDomain} from '../../classes/sk-enterprise-domain';
import {SKConfigState, SkFormConfig} from '@sk-framework/sk-core';
import {
  SKCreateAllEnterpriseAction,
  SKCreateAndGetEnterpriseAction,
  SKCreateEnterpriseAction,
  SKEnterpriseModelState,
  SKEnterpriseModelStateModel, SKUpdateAllEnterpriseAction, SKUpdateAndGetEnterpriseAction, SKUpdateEnterpriseAction
} from '../../services/sk-enterprise-state';
import {SkAbstractFormAction, SkAbstractFormComponent} from '../../../../abstract';
import {SkComponentsData} from '../../../../services/sk-components-data';

@Component({
  selector: 'sk-enterprise-form',
  templateUrl: './sk-enterprise-form.component.html',
  styleUrls: ['./sk-enterprise-form.component.css']
})
export class SkEnterpriseFormComponent extends SkAbstractFormComponent<SkEnterpriseDomain, SKEnterpriseModelStateModel> implements OnInit {
  form: FormGroup | undefined;
  entity: SkEnterpriseDomain = this.data.store.selectSnapshot(SKEnterpriseModelState.currentSelector) || new SkEnterpriseDomain();
  formConfig: SkFormConfig = this.data.store.selectSnapshot(SKConfigState.formSelector);
  disableButton = false;

  constructor(data: SkComponentsData) {
    super(data);
  }

  state(): SKEnterpriseModelStateModel {
    return this.data.store.selectSnapshot(SKEnterpriseModelState.selector);
  }

  get actions(): SkAbstractFormAction<SkEnterpriseDomain> {
    return {
      create: (entity: SkEnterpriseDomain, others) => new SKCreateEnterpriseAction({entity, others}),
      createAndGet: ((entity, pagination, others) => new SKCreateAndGetEnterpriseAction({entity, pagination, others})),
      createAll: (entities: SkEnterpriseDomain[], others) => new SKCreateAllEnterpriseAction({entities, others}),

      update: (entity: SkEnterpriseDomain, id, others) => new SKUpdateEnterpriseAction({entity, id, others}),
      updateAndGet: ((entity, id, pagination, others) => new SKUpdateAndGetEnterpriseAction({entity, id, pagination, others})),
      updateAll: (entities: SkEnterpriseDomain[], others) => new SKUpdateAllEnterpriseAction({entities, others})
    };
  }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm(): void {
    const target = Object
      .keys(this.entity)
      .map((value: any) => value as keyof SkEnterpriseDomain)
      .reduce<SkEnterpriseDomain>((pr: SkEnterpriseDomain, cu: keyof SkEnterpriseDomain) => {
        pr[cu] = this.entity[cu];
        return pr;
      }, new SkEnterpriseDomain());

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
    this.form =  this.data.formBuilder.group(Object.assign(target, source));
  }
}
