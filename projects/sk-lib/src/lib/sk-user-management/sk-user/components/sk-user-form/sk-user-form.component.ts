import {Component, OnInit} from '@angular/core';
import {SkAbstractFormComponent} from '../../../../abstract';
import {SkIUserDomain, SkUserDomain, UserState} from '../../classes/sk-user-domain';
import {
  SKCreateAllUserAction,
  SKCreateAndGetUserAction,
  SKCreateUserAction,
  SKUpdateAllUserAction,
  SKUpdateAndGetUserAction,
  SKUpdateUserAction,
  SKUserModelState,
  SKUserModelStateModel
} from '../../services/sk-user-state';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SKConfigState, SkFormConfig} from '@sk-framework/sk-core';
import {SkProfileDomain, SKProfileModelState} from '../../../sk-profile';
import {SkComponentsData} from '../../../../services';
import {ActivatedRoute, Router} from '@angular/router';
import {SkAbstractFormAction} from '../../../../abstract';

@Component({
  selector: 'sk-user-form',
  templateUrl: './sk-user-form.component.html',
  styleUrls: ['./sk-user-form.component.css']
})
export class SkUserFormComponent extends SkAbstractFormComponent<SkUserDomain, SKUserModelStateModel> implements OnInit {
  form: FormGroup | undefined;
  entity: SkUserDomain = this.data.store.selectSnapshot(SKUserModelState.currentSelector) || new SkUserDomain();
  profiles: SkProfileDomain[] = this.data.store.selectSnapshot(SKProfileModelState.allSelector);
  formConfig: SkFormConfig = this.data.store.selectSnapshot(SKConfigState.formSelector);
  disableButton = false;
  profileFilterControl: FormControl = new FormControl('');

  constructor(data: SkComponentsData,
              protected router: Router,
              protected activatedRoute: ActivatedRoute) {
    super(data, router, activatedRoute);
  }

  state(): SKUserModelStateModel {
    return this.data.store.selectSnapshot(SKUserModelState.selector);
  }

  get actions(): SkAbstractFormAction<SkUserDomain> {
    return {
      create: (entity: SkUserDomain, others) => new SKCreateUserAction({entity, others}),
      createAndGet: ((entity, pagination, others) => new SKCreateAndGetUserAction({entity, pagination, others})),
      createAll: (entities: SkUserDomain[], others) => new SKCreateAllUserAction({entities, others}),

      update: (entity: SkUserDomain, id, others) => new SKUpdateUserAction({entity, id, others}),
      updateAndGet: ((entity, id, pagination, others) => new SKUpdateAndGetUserAction({entity, id, pagination, others})),
      updateAll: (entities: SkUserDomain[], others) => new SKUpdateAllUserAction({entities, others})
    };
  }

  ngOnInit(): void {
    this.buildForm(this.entity);
  }


  buildForm(entity: SkUserDomain): void {
    const target = Object
      .keys(entity)
      .map((value: any) => value as keyof SkUserDomain)
      .reduce<SkUserDomain>((pr: SkUserDomain, cu: keyof SkUserDomain) => {
        pr[cu] = entity[cu];
        return pr;
      }, new SkUserDomain());

    const source = {
      name: [entity.name, [
        Validators.required,
        Validators.maxLength(this.formConfig.validators.maxLength),
        Validators.minLength(this.formConfig.validators.minLength),
      ]],
      userName: [entity.userName, [
        Validators.required,
        Validators.maxLength(this.formConfig.validators.maxLength),
        Validators.minLength(this.formConfig.validators.minLength),
      ]],
      email: [entity.email, [Validators.email]],
      status: [entity.status === UserState.ACTIVE, [Validators.required]],
      profile: [entity.profile, [Validators.required]]
    };
    this.form = this.data.formBuilder.group(Object.assign(target, source));
  }

  passwordValidators(entity: SkUserDomain): Validators[] {
    return entity.id ? [
      Validators.required,
      Validators.maxLength(this.formConfig.validators.maxLength),
      Validators.minLength(this.formConfig.validators.minLength),
    ] : [];
  }

  update(): Promise<SkUserDomain> {
    return super.update(this.buildEntityFromForm(), this.entity.id,
      () => this.router.navigate(['../../'], {relativeTo: this.activatedRoute}));
  }

  private buildEntityFromForm(): SkIUserDomain {
    return {
      ...this.form?.getRawValue(),
      status: this.form?.getRawValue().status === true ? UserState.ACTIVE : UserState.DESACTIVE
    };
  }

  create(): Promise<SkUserDomain> {
    return super.create(this.buildEntityFromForm(),
      () => this.router.navigate(['../'], {relativeTo: this.activatedRoute}));
  }

  updateAndGet(): Promise<SkUserDomain[]> {
    return super.updateAndGet(this.buildEntityFromForm(), this.entity.id,
      () => this.router.navigate(['../../'], {relativeTo: this.activatedRoute}));
  }

  createAndGet(): Promise<SkUserDomain[]> {
    return super.createAndGet(this.buildEntityFromForm(),
      () => this.router.navigate(['../'], {relativeTo: this.activatedRoute}));
  }

  get filterProduct(): SkProfileDomain[] {
    const filter = this.profileFilterControl.value.trim();
    return filter ? this.profiles.filter(value => value.name?.trim().includes(filter)) : this.profiles;
  }

  compareById(first: { id: any }, second: { id: any }): boolean {
    return first && second && first.id === second.id;
  }
}
