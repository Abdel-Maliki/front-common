/**
 * @author abdel-maliki
 */

export interface MenuItem {
  title: string;
  link?: string;
  icon?: string;
  menuItems?: MenuItem[];
  id?: string;
  roles?: string[];
}


export interface MenuCategory {
  title: string;
  menuItems: MenuItem[];
}
