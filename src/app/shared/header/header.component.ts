import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { cart } from './data';
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from 'src/app/core/services/language.service';

interface Country {
  code: string;
  // other properties of the country object
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


// Header Component
export class HeaderComponent {
  selectedCountry: any;
  // modalRef?: BsModalRef;
  isOpen = true;
  searchmodal: boolean = false;
  sidebarVisible: boolean = false;
  menu: any;
  carts: any;
  // menuItems: MegaMenuItem[];;
  menuItems: MenuItem[] = [];
  isDropdownOpen: boolean = false
  changesMode: boolean = false
  total: any;
  subtotal: any = 0;
  totalsum: any = 0;
  taxRate: any = 0.125;
  shippingRate: any = 65.00;
  discountRate: any = 0.15;
  display: boolean = false;
  chatVisible: boolean = false;
  removedisplay: boolean = false;
  country: any;
  selectedItem!: any;
  cookieValue: any;

  @ViewChild('template') template: any;
  deletecart_id: any;
  usuarioLoged: boolean = false;


  constructor(public languageService: LanguageService, public translate: TranslateService, private elRef: ElementRef) {

  }

 

  isLabelTranslated(label: string): boolean {
    return this.translate.instant(label) == label;

  }

  isShopLabelTranslated(label: string): boolean {
    console.log(label)
    return this.translate.instant(label) == label;
  }

  cerrarSesion(){
    localStorage.removeItem('usuario');
    window.location.reload();
  }

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');
    if(usuario){
      this.usuarioLoged = true;
    }
    // Menu Items
    this.menuItems = MENU;

    this.carts = cart

    this.carts.forEach((element: any) => {
      element.total = (parseFloat(element.price) * element.qty).toFixed(2)
      this.subtotal += parseFloat(element.total)
    });
    this.taxRate = (this.subtotal * this.taxRate).toFixed(2);
    this.discountRate = (this.subtotal * this.discountRate).toFixed(2);

    if (this.subtotal > 0) {
      this.shippingRate = this.shippingRate.toFixed(2)
    } else {
      this.shippingRate = 0
    }
    this.totalsum = this.subtotal + parseFloat(this.taxRate) + parseFloat(this.shippingRate) - parseFloat(this.discountRate);

    this.country = [
      { label: 'English', value: 'assets/images/flags/us.svg', code: 'en' },
      { label: 'Española', value: 'assets/images/flags/spain.svg', code: 'sp' },
      { label: 'Deutsche', value: 'assets/images/flags/germany.svg', code: 'gr' },
      { label: 'Italiana', value: 'assets/images/flags/italy.svg', code: 'it' },
      { label: 'русский', value: 'assets/images/flags/russia.svg', code: 'ru' },
      { label: '中国人', value: 'assets/images/flags/china.svg', code: 'ch' },
      { label: 'français', value: 'assets/images/flags/french.svg', code: 'fr' },
      { label: 'عربى', value: 'assets/images/flags/sa.svg', code: 'sa' }
    ];
    this.selectedCountry = this.country.find((country: any) => country.code === 'en');

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadModal();
    }, 2000);
    setTimeout(() => {
      this.initActiveMenu();
    }, 10);
  }

  loadModal() {
    this.display = true;
  }

  showDialog() {
    this.searchmodal = true;
  }

  // Default
  increment(price: any, id: any, type: any) {
    this.total = 0;
    this.subtotal = 0;
    if (type == 0) {
      this.carts[id].qty -= 1
    }
    if (type == 1) {
      this.carts[id].qty += 1
    }
    this.carts[id].total = (this.carts[id].qty * parseFloat(price)).toFixed(2)
    this.carts.forEach((element: any) => {
      element.total = (parseFloat(element.price) * element.qty).toFixed(2)
      this.subtotal += parseFloat(element.total)
    });
    // this.subtotal += this.carts[id].total
    this.taxRate = (this.subtotal * 0.125).toFixed(2);
    this.discountRate = (this.subtotal * 0.15).toFixed(2);

    if (this.subtotal > 0) {
      this.shippingRate = this.shippingRate
    } else {
      this.shippingRate = 0
    }
    console.log(this.subtotal)
    console.log(this.taxRate)
    console.log(this.shippingRate)
    console.log(this.discountRate)
    this.totalsum = parseFloat(this.subtotal) + parseFloat(this.taxRate) + parseFloat(this.shippingRate) - parseFloat(this.discountRate);
  }

  // Set Light Dark Mode
  setMode(mode: any) {
    document.documentElement.setAttribute('data-bs-theme', mode)
  }

  // Delet Modal
  showremoveDialog(id: any) {
    this.deletecart_id = id
    this.removedisplay = true;
  }

  // Delete cart
  deleteCart() {
    this.carts.splice(this.deletecart_id, 1)
    this.removedisplay = false;
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  windowScroll() {

    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      (document.querySelector("#back-to-top") as HTMLElement).style.display = "block";
    }
    else {
      (document.querySelector("#back-to-top") as HTMLElement).style.display = "none";
    }
  }

  /***
  * Language Value Set
  */
  /***
  * Language Value Set
  */
  setLanguage(selectedCountryValue: any) {
    console.log(selectedCountryValue);
    this.cookieValue = selectedCountryValue;
    this.languageService.setLanguage(selectedCountryValue);
    // Additional logic as needed
    this.selectedCountry = this.country.find((country: any) => country.code === selectedCountryValue);
  }

  /**
 * Returns true or false if given menu item has child or not
 * @param item menuItem
 */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  toggleItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;
    let dropDowns = Array.from(document.querySelectorAll('#navigation-menu .show'));
    dropDowns.forEach((node: any) => {
      node.classList.remove('show');
    });

    (isMenu) ? isMenu.classList.add('show') : null;

    const ul = document.getElementById("navigation-menu");
    if (ul) {
      const iconItems = Array.from(ul.getElementsByTagName("a"));
      let activeIconItems = iconItems.filter((x: any) => x.classList.contains("active"));
      activeIconItems.forEach((item: any) => {
        item.setAttribute('aria-expanded', "false")
        item.classList.remove("active");
      });
    }
    if (isCurrentMenuId) {
      this.activateParentDropdown(isCurrentMenuId);
    }
  }

  removeActivation(items: any) {
    items.forEach((item: any) => {
      if (item.classList.contains("menu-link")) {
        if (!item.classList.contains("active")) {
          item.setAttribute("aria-expanded", false);
        }
        (item.nextElementSibling) ? item.nextElementSibling.classList.remove("show") : null;
      }
      if (item.classList.contains("nav-link")) {
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.remove("show");
        }
        item.setAttribute("aria-expanded", false);
      }
      item.classList.remove("active");
    });
  }

  toggleSubItem(event: any) {
    if (event.target && event.target.nextElementSibling)
      event.target.nextElementSibling.classList.toggle("show");
  };

  toggleExtraSubItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;
    if (isMenu.classList.contains("show")) {
      isMenu.classList.remove("show");
      isCurrentMenuId.setAttribute("aria-expanded", "false");
    } else {
      let dropDowns = Array.from(document.querySelectorAll('.extra-sub-menu'));
      dropDowns.forEach((node: any) => {
        node.classList.remove('show');
      });

      let subDropDowns = Array.from(document.querySelectorAll('.menu-dropdown .nav-link'));
      subDropDowns.forEach((submenu: any) => {
        submenu.setAttribute('aria-expanded', "false");
      });

      if (event.target && event.target.nextElementSibling) {
        isCurrentMenuId.setAttribute("aria-expanded", "true");
        event.target.nextElementSibling.classList.toggle("show");
      }
    }
  };

  // Click wise Parent active class add
  toggleParentItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;
    let dropDowns = Array.from(document.querySelectorAll('#navigation-menu .show'));
    dropDowns.forEach((node: any) => {
      node.classList.remove('show');
    });
    (isMenu) ? isMenu.classList.add('show') : null;

    const ul = document.getElementById("navigation-menu");
    if (ul) {
      const iconItems = Array.from(ul.getElementsByTagName("a"));
      let activeIconItems = iconItems.filter((x: any) => x.classList.contains("active"));
      activeIconItems.forEach((item: any) => {
        item.setAttribute('aria-expanded', "false")
        item.classList.remove("active");
      });
    }
    // isCurrentMenuId.setAttribute("aria-expanded", "true");
    if (isCurrentMenuId) {
      this.activateParentDropdown(isCurrentMenuId);
    }
  }

  activateParentDropdown(item: any) {
    item.classList.add("active");
    console.log(item)
    const parent = item.closest(".dropdown-menu")?.parentElement.firstChild;
    if (parent) {
      parent.classList.add("active");
      const parent2 = item.closest(".dropdown-menu")?.parentElement.closest(".submenu")?.previousElementSibling;
      if (parent2) {
        parent2.classList.add("active");
      }
    }
    return false;
  }

  updateActive(event: any) {
    const ul = document.getElementById("navigation-menu");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      this.removeActivation(items);
    }
    this.activateParentDropdown(event.target);
  }

  initActiveMenu() {
    const pathName = window.location.pathname;
    const ul = document.getElementById("navigation-menu");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      let activeItems = items.filter((x: any) => x.classList.contains("active"));
      this.removeActivation(activeItems);

      let matchingMenuItem = items.find((x: any) => {
        return x.pathname === pathName;
      });
      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  // open menu in mobile screen
  openMobileMenu() {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show')
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.changesMode = false;
    this.chatVisible = false;
  }
  toggleChange() {
    this.changesMode = !this.changesMode;
    this.isDropdownOpen = false
    this.chatVisible = false;

  }
  toggleChat() {
    this.chatVisible = !this.chatVisible;
    this.changesMode = false;
    this.isDropdownOpen = false
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
      this.changesMode = false;
      this.chatVisible = false
    }
  }
  hidesidebar() {
    this.sidebarVisible = false;
    document.getElementById('navbarSupportedContent')?.classList.remove('show')
  }

}