export interface MenuItem {
  id?: number;
  label?: any;
  icon?: string;
  link?: string;
  liclass?: string;
  menuclass?: string;
  type?: string;
  subItems?: any;
  isTitle?: boolean;
  isImage?: boolean;
  badge?: any;
  parentId?: number;
  isLayout?: boolean;
  showImage?: string;
}
