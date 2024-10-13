import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: "MENUITEMS.HOME.TEXT",
        link: "/",
        type:'vertical',
        subItems: [
            {
                id: 1,
                label: 'Main Layout',
                link: '/',
                parentId:1
            },
            {
                id: 2,
                label: 'Unique Watches',
                link: '/watch-main-layout',
                parentId:1
            },
            {
                id: 3,
                label: 'Modern Fashion',
                link: '/modern-fashion',
                parentId:1
            },
            {
                id: 4,
                label: 'Trend Fashion',
                link: '/trend-fashion',
                parentId:1
            }
        ]
    },
    {
        id: 2,
        label: "MENUITEMS.CATELOG.TEXT",
        showImage: "catalog",
        liclass: "dropdown-mega-full",
        type: "horizontal",
        subItems: [
            {
                id: 1,
                label: "MENUITEMS.CATELOG.LIST.MEN",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.CATELOG.LIST.CLOTHING",
                        link: "/catelog/product-grid-sidebar-banner",
                        parentId: 4,
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.CATELOG.LIST.WATCHES",
                        link: "/catelog/product-grid-right",
                        parentId: 4,
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.CATELOG.LIST.BAGS",
                        link: "/catelog/product-list-left",
                        parentId: 4,
                    },
                    {
                        id: 4,
                        label: "MENUITEMS.CATELOG.LIST.FOOTWEAR",
                        link: "/catelog/product-grid-right",
                        parentId: 4,
                    },
                    {
                        id: 5,
                        label: "MENUITEMS.CATELOG.LIST.INNERWEAR",
                        link: "/catelog/product-list",
                        parentId: 4,
                    },
                    {
                        id: 6,
                        label: "MENUITEMS.CATELOG.LIST.OTHERACCESSORIES",
                        link: "/catelog/product-list-right",
                        parentId: 4,
                    },
                ],
            },
            {
                id: 2,
                label: "MENUITEMS.CATELOG.LIST.WOMEN",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.CATELOG.LIST.WESTERNWEAR",
                        link: "/catelog/product-list-defualt",
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.CATELOG.LIST.HANDBAGS",
                        link: "/catelog/product-list-left",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.CATELOG.LIST.LINGERIE",
                        link: "/catelog/product-grid-right",
                    },
                    {
                        id: 4,
                        label: "MENUITEMS.CATELOG.LIST.FOOTWEAR",
                        link: "/catelog/product-grid-sidebar-banner",
                    },
                    {
                        id: 5,
                        label: "MENUITEMS.CATELOG.LIST.FASHION",
                        link: "/catelog/product-grid-defualt",
                    },
                ],
            },
            {
                id: 3,
                label: "MENUITEMS.CATELOG.LIST.ACCESSORIES",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.CATELOG.LIST.KITCHEN",
                        link: "/catelog/product-grid-right",
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.CATELOG.LIST.BEAUTY",
                        link: "/catelog/product-list-left",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.CATELOG.LIST.SPORTS",
                        link: "/catelog/product-grid-sidebar-banner",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.CATELOG.LIST.CAR",
                        link: "/catelog/product-list",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.CATELOG.LIST.BOOKS",
                        link: "/catelog/product-list-right",
                    },
                ],
            },
            {
                id: 4,
                label: "MENUITEMS.CATELOG.LIST.OTHERS",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.CATELOG.LIST.SIGNUP",
                        link: "/auth/signup-basic",
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.CATELOG.LIST.SIGNIN",
                        link: "/auth/signin-basic",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.CATELOG.LIST.RESETPASSWORD",
                        link: "/auth/pass-reset-basic",
                    },
                    {
                        id: 4,
                        label: "MENUITEMS.CATELOG.LIST.ERROR404",
                        link: "/auth/error404",
                    },
                ],
            },
            {
                id: 4,
                label: "MENUITEMS.CATELOG.LIST.TOPBRANDS",
                isImage: true,
                subChild: [
                    {
                        id: 1,
                        url: "assets/images/brands/img-8.png",
                    },
                    {
                        id: 2,
                        url: "assets/images/brands/img-2.png",
                    },
                    {
                        id: 3,
                        url: "assets/images/brands/img-3.png",
                    },
                    {
                        id: 4,
                        url: "assets/images/brands/img-4.png",
                    },
                    {
                        id: 5,
                        url: "assets/images/brands/img-5.png",
                    },
                    {
                        id: 6,
                        url: "assets/images/brands/img-6.png",
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        label: "MENUITEMS.SHOP.TEXT",
        showImage: "shop",
        menuclass: "dropdown-mega-menu-xl dropdown-menu-center",
        type: "horizontal",
        subItems: [
            {
                id: 1,
                label: "MENUITEMS.SHOP.LIST.CHECKOUTPAGES",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.SHOP.LIST.ADDRESS",
                        link: "/shop/address",
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.SHOP.LIST.TRACKORDER",
                        link: "/shop/track-order",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.SHOP.LIST.PAYMENT",
                        link: "/shop/payment",
                    },
                    {
                        id: 4,
                        label: "MENUITEMS.SHOP.LIST.REVIEW",
                        link: "/shop/review",
                    },
                    {
                        id: 5,
                        label: "MENUITEMS.SHOP.LIST.CONFIRMATION",
                        link: "/shop/confirmation",
                    },
                    {
                        id: 6,
                        label: "MENUITEMS.SHOP.LIST.MYORDER",
                        link: "/shop/order-history",
                    },
                ],
            },
            {
                id: 2,
                label: "MENUITEMS.SHOP.LIST.SUPPORT",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.SHOP.LIST.SHOPPINGCART",
                        link: "/shop/shop-cart",
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.SHOP.LIST.CHECKOUT",
                        link: "/shop/checkout",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.SHOP.LIST.WISHLIST",
                        link: "/shop/wishlist",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        label: "MENUITEMS.PAGES.TEXT",
        type: "vertical",
        subItems: [
            {
                id: 1,
                label: "MENUITEMS.PAGES.LIST.PRODUCTS",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.PAGES.LIST.GRIDVIEW",
                        subItems: [
                            {
                                id: 1,
                                label: "MENUITEMS.PAGES.LIST.DEFAULT",
                                link: "/catelog/product-grid-defualt",
                            },
                            {
                                id: 2,
                                label: "MENUITEMS.PAGES.LIST.SIDEBAR",
                                link: "/catelog/product-grid-sidebar-banner",
                            },
                            {
                                id: 3,
                                label: "MENUITEMS.PAGES.LIST.RIGHTSIDEBAR",
                                link: "/catelog/product-grid-right",
                            },
                            {
                                id: 4,
                                label: "MENUITEMS.PAGES.LIST.NOSIDEBAR",
                                link: "/catelog/product-grid",
                            },
                        ],
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.PAGES.LIST.LISTVIEW",
                        subItems: [
                            {
                                id: 1,
                                label: "MENUITEMS.PAGES.LIST.DEFAULT",
                                link: "/catelog/product-list-defualt",
                            },
                            {
                                id: 2,
                                label: "MENUITEMS.PAGES.LIST.SIDEBAR",
                                link: "/catelog/product-grid-sidebar-banner",
                            },
                            {
                                id: 3,
                                label: "MENUITEMS.PAGES.LIST.RIGHTSIDEBAR",
                                link: "/catelog/product-list-right",
                            },
                            {
                                id: 4,
                                label: "MENUITEMS.PAGES.LIST.NOSIDEBAR",
                                link: "/catelog/product-list",
                            },
                        ],
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.PAGES.LIST.PRODUCTDETAILS",
                        link: "/catelog/product-details",
                    },
                ],
            },
            {
                id: 2,
                label: "MENUITEMS.PAGES.LIST.USERS",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.PAGES.LIST.MYACCOUNT",
                        link: "/users/account",
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.PAGES.LIST.SIGNIN",
                        link: "/auth/signin-basic",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.PAGES.LIST.SIGNUP",
                        link: "/auth/signup-basic",
                    },
                    {
                        id: 4,
                        label: "MENUITEMS.PAGES.LIST.PASSWORDRESET",
                        link: "/auth/pass-reset-basic",
                    },
                    {
                        id: 5,
                        label: "MENUITEMS.PAGES.LIST.PASSWORDCREATE",
                        link: "/auth/pass-change-basic",
                    },
                    {
                        id: 6,
                        label: "MENUITEMS.PAGES.LIST.SUCCESSMESSAGE",
                        link: "/auth/success-msg-basic",
                    },
                    {
                        id: 7,
                        label: "MENUITEMS.PAGES.LIST.TWOSTEPVERIFY",
                        link: "/auth/twostep-basic",
                    },
                    {
                        id: 8,
                        label: "MENUITEMS.PAGES.LIST.LOGOUT",
                        link: "/auth/logout-basic",
                    },
                    {
                        id: 9,
                        label: "MENUITEMS.PAGES.LIST.ERROR404",
                        link: "/auth/error404",
                    },
                    {
                        id: 10,
                        label: "MENUITEMS.PAGES.LIST.ERROR500",
                        link: "/auth/error500",
                    },
                    {
                        id: 11,
                        label: "MENUITEMS.PAGES.LIST.COMINGSOON",
                        link: "/auth/coming-soon",
                    },
                ],
            },
            {
                id: 3,
                label: "MENUITEMS.CATEGORIES.TEXT",
                link: "/extrapages/products-category",
            },
            {
                id: 4,
                label: "MENUITEMS.ABOUT.TEXT",
                link: "/extrapages/about-us",
            },
            {
                id: 4,
                label: "MENUITEMS.PURCHASEGUIDE.TEXT",
                link: "/extrapages/purchase-guide",
            },
            {
                id: 4,
                label: "MENUITEMS.TERMSOFSERVICE.TEXT",
                link: "/extrapages/terms-conditions",
            },
            {
                id: 4,
                label: "MENUITEMS.PRIVACYPOLICY.TEXT",
                link: "/extrapages/privacy-policy",
            },
            {
                id: 4,
                label: "MENUITEMS.STORELOCATOR.TEXT",
                link: "/extrapages/store-locator",
            },
            {
                id: 4,
                label: "MENUITEMS.FAQ.TEXT",
                link: "/extrapages/ecommerce-faq",
            },
            {
                id: 4,
                label: "MENUITEMS.INVOICE.TEXT",
                link: "/extrapages/invoice",
            },
            {
                id: 5,
                label: "MENUITEMS.EMAILTEMPLATE.TEXT",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.EMAILTEMPLATE.LIST.BLACKFRIDAY",
                        link: "/email/black-friday",
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.EMAILTEMPLATE.LIST.FLASHSALE",
                        link: "/email/flash-sale",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.EMAILTEMPLATE.LIST.ORDERSUCCESS",
                        link: "/email/order-success",
                    },
                    {
                        id: 4,
                        label: "MENUITEMS.EMAILTEMPLATE.LIST.ORDERSUCCESS2",
                        link: "/email/order-success-2",
                    },
                ],
            },

            {
                id: 6,
                label: "MENUITEMS.MULTILEVEL.TEXT",
                subChild: [
                    {
                        id: 1,
                        label: "MENUITEMS.MULTILEVEL.LIST.Level1.1",
                    },
                    {
                        id: 2,
                        label: "MENUITEMS.MULTILEVEL.LIST.Level1.2",
                    },
                    {
                        id: 3,
                        label: "MENUITEMS.MULTILEVEL.LIST.Level2.TEXT",
                        subItems: [
                            {
                                label: "MENUITEMS.MULTILEVEL.LIST.Level2.1",
                            },
                            {
                                label: "MENUITEMS.MULTILEVEL.LIST.Level2.2",
                            },
                            {
                                label: "MENUITEMS.MULTILEVEL.LIST.Level3.TEXT",
                                subItems: [
                                    {
                                        label: "MENUITEMS.MULTILEVEL.LIST.Level3.1",
                                    },
                                    {
                                        label: "MENUITEMS.MULTILEVEL.LIST.Level3.2",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        label: "MENUITEMS.CONTACT.TEXT",
        link: "/extrapages/contact-us",
        isTitle: true,
    },
];
