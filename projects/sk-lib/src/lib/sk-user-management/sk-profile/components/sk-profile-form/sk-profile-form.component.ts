import {Component, OnInit} from '@angular/core';
import {SkAbstractFormAction, SkAbstractFormComponent} from '../../../../abstract';
import {SkProfileDomain} from '../../classes/sk-profile-domain';
import {
  SKCreateAllProfileAction,
  SKCreateAndGetProfileAction,
  SKCreateProfileAction,
  SKProfileModelState,
  SKProfileModelStateModel, SKUpdateAllProfileAction, SKUpdateAndGetProfileAction, SKUpdateProfileAction
} from '../../services';
import {Validators} from '@angular/forms';
import {SkComponentsData} from '../../../../services/sk-components-data';

@Component({
  selector: 'sk-profile-form',
  templateUrl: './sk-profile-form.component.html',
  styleUrls: ['./sk-profile-form.component.css']
})
export class SkProfileFormComponent extends SkAbstractFormComponent<SkProfileDomain, SKProfileModelStateModel> implements OnInit {
  entity: SkProfileDomain = this.data.store.selectSnapshot(SKProfileModelState.currentSelector) || new SkProfileDomain();

  constructor(data: SkComponentsData) {
    super(data);
  }

  state(): SKProfileModelStateModel {
    return this.data.store.selectSnapshot(SKProfileModelState.selector);
  }

  get actions(): SkAbstractFormAction<SkProfileDomain> {
    return {
      create: (entity: SkProfileDomain, others) => new SKCreateProfileAction({entity, others}),
      createAndGet: ((entity, pagination, others) => new SKCreateAndGetProfileAction({entity, pagination, others})),
      createAll: (entities: SkProfileDomain[], others) => new SKCreateAllProfileAction({entities, others}),
      update: (entity: SkProfileDomain, id, others) => new SKUpdateProfileAction({entity, id, others}),
      updateAndGet: ((entity, id, pagination, others) => new SKUpdateAndGetProfileAction({entity, id, pagination, others})),
      updateAll: (entities: SkProfileDomain[], others) => new SKUpdateAllProfileAction({entities, others})
    };
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    const target = Object
      .keys(this.entity)
      .map((value: any) => value as keyof SkProfileDomain)
      .reduce<SkProfileDomain>((pr: SkProfileDomain, cu: keyof SkProfileDomain) => {
        pr[cu] = this.entity[cu];
        return pr;
      }, new SkProfileDomain());

    const source = {
      name: [this.entity.name, [
        Validators.required,
        Validators.maxLength(this.formConfig.validators.maxLength),
        Validators.minLength(this.formConfig.validators.minLength),
      ]],
      description: [this.entity.description]
    };
    this.form = this.data.formBuilder.group(Object.assign(target, source));
  }
}
