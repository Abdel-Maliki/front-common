import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuCategory} from './type';

@Component({
  selector: 'sk-menu-left',
  templateUrl: './sk-menu-left.component.html',
  styleUrls: ['./sk-menu-left.component.scss']
})
export class SkMenuLeftComponent implements OnInit, OnDestroy {

  menuCategories: MenuCategory[] = MenuLeftItems;

  constructor() {
  }

  ngOnInit(): void {
  }

  hasLast(menuCategory: MenuCategory): boolean {
    return this.menuCategories.indexOf(menuCategory) === this.menuCategories.length - 1;
  }

  ngOnDestroy(): void {
  }
}

export let MenuLeftItems: MenuCategory[] = [
  {
    title: 'categorie 1',
    menuItems: [
      {title: 'item3', link: '#', icon: 'fa fa-deaf'},
      {
        title: 'item21', link: '#', icon: 'fa fa-cubes', menuItems: [
          {title: 'sub1 item1', link: '#', icon: 'fa fa-fax'},
          {title: 'sub1 item2', link: '#', icon: 'fa fa-cubes'},
          {title: 'sub1 item3', link: '#', icon: 'fa fa-fire'},
        ]
      },
      {
        title: 'item22', link: '#', icon: 'fa fa-film', menuItems: [
          {title: 'sub item1', link: '#', icon: 'fa fa-question'},
          {
            title: 'sub item2', link: '#', icon: 'fa fa-filter', menuItems: [
              {title: 'sub1 sub item1', link: '#', icon: 'fa fa-plane'},
              {title: 'sub1 sub item2', link: '#', icon: 'fa fa-random'},
              {title: 'sub1 sub item3', link: '#', icon: 'fa fa-paw'},
            ]
          },
          {
            title: 'sub item3', link: '#', icon: 'fa fa-folder-o', menuItems: [
              {title: 'sub sub item1', link: '#', icon: 'fa fa-photo'},
              {
                title: 'sub sub item2', link: '#', icon: 'fa fa-cubes', menuItems: [
                  {title: 'sub sub sub1 item1', link: '#', icon: 'fa fa-magic'},
                  {title: 'sub sub sub1 item2', link: '#', icon: 'fa fa-recycle'},
                  {title: 'sub sub sub1 item3', link: '#', icon: 'fa fa-cubes'},
                ]
              },
              {
                title: 'sub sub item3', link: '#', icon: 'fa fa-history', menuItems: [
                  {title: 'sub sub sub2 item1', link: '#', icon: 'fa fa-legal'},
                  {title: 'sub sub sub2 item2', link: '#', icon: 'fa fa-reoader'},
                  {title: 'sub sub sub2 item3', link: '#', icon: 'fa fa-print'},
                ]
              },
            ]
          },
        ]
      },
    ]
  },
  {
    title: 'categorie 2',
    menuItems: [
      {title: 'itemPP', link: '#', icon: 'fa fa-deaf'},
    ]
  }
];

