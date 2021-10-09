import {Component, Inject, OnInit} from '@angular/core';
import {SK_PROFILE_SERVICE} from '../../../../classes';
import {SkProfileService} from '../../services/sk-profile.service';
import {Store} from '@ngxs/store';

@Component({
  selector: 'sk-sk-profile-list-page',
  templateUrl: './sk-profile-list-page.component.html',
  styleUrls: ['./sk-profile-list-page.component.css']
})
export class SkProfileListPageComponent implements OnInit {

  constructor(@Inject(SK_PROFILE_SERVICE) protected service: SkProfileService, protected store: Store) {
  }

  ngOnInit(): void {
  }

}
