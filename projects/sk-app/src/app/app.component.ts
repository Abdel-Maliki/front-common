import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {MenuCategory} from '@sk-framework/sk-core';


@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public store: Store) {
  }
  title = 'sk-app';

  menuCategories = MenuLeftItems;


  ngOnInit(): void {
  }
}


export let MenuLeftItems: MenuCategory[] = [
  /* {
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
   },*/
  {
    title: 'categorie 2',
    menuItems: [
      {
        title: 'User Management', link: 'users-management', icon: 'fa fa-users', menuItems: [
          {title: 'Utilisateur', link: 'users', icon: 'fa fa-users'},
          {title: 'Entreprise', link: 'enterprises', icon: 'fa fa-deaf'},
          {title: 'Profile', link: 'profiles', icon: 'fa fa-user'},
        ]
      },
    ]
  }
];
