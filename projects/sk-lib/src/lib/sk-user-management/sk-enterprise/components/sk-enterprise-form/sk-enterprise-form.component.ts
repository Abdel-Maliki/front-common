import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {SkEnterpriseModel, SkIEnterprise} from '../../sk-enterprise-model';
import {Store} from '@ngxs/store';
import {SKConfigState, SkFormConfig} from 'sk-core';

@Component({
  selector: 'sk-sk-enterprise-form',
  templateUrl: './sk-enterprise-form.component.html',
  styleUrls: ['./sk-enterprise-form.component.css']
})
export class SkEnterpriseFormComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({});
  entity: SkEnterpriseModel = new SkEnterpriseModel();
  formConfig: SkFormConfig = this.store.selectSnapshot(SKConfigState.formSelector);

  constructor(protected store: Store, protected formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    const target = Object
      .keys(this.entity)
      .map((value: any) => value as keyof SkIEnterprise)
      .reduce((pr, cu) => pr[cu] = this.entity[cu], new SkEnterpriseModel());

    const source = {
      name: [this.entity.name, [
        Validators.required,
        Validators.maxLength(this.formConfig.validators.maxLength),
        Validators.minLength(this.formConfig.validators.maxLength),
      ]],
      email: [this.entity.email, [Validators.email]],
      address: [this.entity.address],
      tel: [this.entity.tel],
      description: [this.entity.description]
    };
    this.form = this.formBuilder.group(Object.assign(target, source));
  }


}
