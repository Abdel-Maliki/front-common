import {Component, OnInit} from '@angular/core';
import {MenuCategory} from './type';
import {Router} from '@angular/router';

@Component({
  selector: 'sk-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {

  menuItems: MenuCategory[] = MenuLeftItems;

  activeSubmenus: { [key: string]: boolean } = {};
  activeSubSubmenus: { [key: string]: boolean } = {};
  activeSubSubSubmenus: { [key: string]: boolean } = {};

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  toggleSubmenu(event: Event, name: string): void {
    this.activeSubmenus = {[name]: !this.activeSubmenus[name]};
    event.preventDefault();
  }

  toggleSubSubmenu(event: Event, name: string): void {
    this.activeSubSubmenus = {[name]: !this.activeSubSubmenus[name]};
    event.preventDefault();
  }

  toggleSubSubSubmenu(event: Event, name: string): void {
    this.activeSubSubSubmenus = {[name]: !this.activeSubSubSubmenus[name]};
    event.preventDefault();
  }

  isSubmenuActive(name: string): boolean {
    if (this.activeSubmenus.hasOwnProperty(name)) {
      return this.activeSubmenus[name];
    } else if (this.router.isActive(name, false)) {
      this.activeSubmenus[name] = true;
      return true;
    }
    return false;
  }

  isSubSubmenuActive(parentName: string, name: string): boolean {
    if (!this.isSubmenuActive(parentName)) { return false; }
    if (this.activeSubSubmenus.hasOwnProperty(name)) {
      return this.activeSubSubmenus[name];
    } else if (this.router.isActive(name, false)) {
      this.activeSubSubmenus[name] = true;
      return true;
    }

    return false;
  }

  isSubSubSubmenuActive(parentparentName: string, parentName: string, name: string): boolean {
    if (!this.isSubSubmenuActive(parentparentName, parentName)) { return false; }
    if (this.activeSubSubSubmenus.hasOwnProperty(name)) {
      return this.activeSubSubSubmenus[name];
    } else if (this.router.isActive(name, false)) {
      this.activeSubSubSubmenus[name] = true;
      return true;
    }

    return false;
  }

}


export const MenuLeftItems: MenuCategory[] = [
    {
      title: 'categorie 2',
      menuItems: [
        { title: 'item3', link: '#', icon: 'fa fa-deaf'},
        { title: 'item21', link: '#', icon: 'fa fa-cubes', menuItems: [
          { title: 'sub1 item1', link: '#', icon: 'fa fa-fax'},
          { title: 'sub1 item2', link: '#', icon: 'fa fa-cubes'},
          { title: 'sub1 item3', link: '#', icon: 'fa fa-fire'},
        ]},
        { title: 'item22', link: '#', icon: 'fa fa-film', menuItems: [
          { title: 'sub item1', link: '#', icon: 'fa fa-question'},
          { title: 'sub item2', link: '#', icon: 'fa fa-filter', menuItems: [
            { title: 'sub1 sub item1', link: '#', icon: 'fa fa-plane'},
            { title: 'sub1 sub item2', link: '#', icon: 'fa fa-random'},
            { title: 'sub1 sub item3', link: '#', icon: 'fa fa-paw'},
          ]},
          { title: 'sub item3', link: '#', icon: 'fa fa-folder-o', menuItems: [
            { title: 'sub sub item1', link: '#', icon: 'fa fa-photo'},
            { title: 'sub sub item2', link: '#', icon: 'fa fa-cubes', menuItems: [
              { title: 'sub sub sub1 item1', link: '#', icon: 'fa fa-magic'},
              { title: 'sub sub sub1 item2', link: '#', icon: 'fa fa-recycle'},
              { title: 'sub sub sub1 item3', link: '#', icon: 'fa fa-cubes'},
            ]},
            { title: 'sub sub item3', link: '#', icon: 'fa fa-history', menuItems: [
              { title: 'sub sub sub2 item1', link: '#', icon: 'fa fa-legal'},
              { title: 'sub sub sub2 item2', link: '#', icon: 'fa fa-reoader'},
              { title: 'sub sub sub2 item3', link: '#', icon: 'fa fa-print'},
            ]},
          ]},
        ]},
      ]
    },
  ]
;

