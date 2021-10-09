import {Component, OnInit} from '@angular/core';
import {SkAbstractFormAction, SkAbstractFormComponent} from '../../../../abstract';
import {SkProfileDomain} from '../../classes/sk-profile-domain';
import {
  SKCreateAllProfileAction,
  SKCreateAndGetProfileAction,
  SKCreateProfileAction,
  SKProfileModelState,
  SKProfileModelStateModel, SKUpdateAllProfileAction, SKUpdateAndGetProfileAction, SKUpdateProfileAction
} from '../../../sk-profile';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {SKConfigState, SkFormConfig} from 'sk-core';

@Component({
  selector: 'sk-profile-form',
  templateUrl: './sk-profile-form.component.html',
  styleUrls: ['./sk-profile-form.component.css']
})
export class SkProfileFormComponent extends SkAbstractFormComponent<SkProfileDomain, SKProfileModelStateModel> implements OnInit {
  form: FormGroup | undefined;
  entity: SkProfileDomain = this.store.selectSnapshot(SKProfileModelState.currentSelector) || new SkProfileDomain();
  formConfig: SkFormConfig = this.store.selectSnapshot(SKConfigState.formSelector);
  disableButton = false;

  constructor(store: Store,
              protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected formBuilder: FormBuilder) {
    super(store);
  }

  state(): SKProfileModelStateModel {
    return this.store.selectSnapshot(SKProfileModelState.selector);
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
    this.form = this.formBuilder.group(Object.assign(target, source));
  }

  update(): Promise<SkProfileDomain> {
    return super.update(this.form?.getRawValue(), this.entity.id, () => this.router.navigate(['../../']));
  }

  create(): Promise<SkProfileDomain> {
    return super.create(this.form?.getRawValue(), () => this.router.navigate(['../']));
  }

  updateAndGet(): Promise<SkProfileDomain[]> {
    return super.updateAndGet(this.form?.getRawValue(), this.entity.id, () => this.router.navigate(['../../']));
  }

  createAndGet(): Promise<SkProfileDomain[]> {
    return super.createAndGet(this.form?.getRawValue(), () => this.router.navigate(['../'],
      {relativeTo: this.activatedRoute}));
  }


}
