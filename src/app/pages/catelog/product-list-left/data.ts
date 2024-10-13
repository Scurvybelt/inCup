const productList = [
    {
        id: '1',
        img: 'assets/images/products/img-10.png',
        title: "World's most expensive t shirt",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 266.24,
        mrp: '354.99',
        stock: 'Out of stock',
        rating:4.9,
        color: ['secondary', 'light', 'dark'],
        size: ['S', 'M', 'L'],
        discount: '25%',
        type:'fashion'
    },
    {
        id: '2',
        img: 'assets/images/products/img-15.png',
        title: "Like Style Women Black Handbag",
        content: 'T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.',
        price: 742.00,
        stock: 'In stock',
        rating:4.2,
        color: ['light', 'dark'],
        type:'fashion'
    },
    {
        id: '3',
        img: 'assets/images/products/img-1.png',
        title: "Black Horn Backpack For Men Bags 30 L Backpack",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 113.24,
        mrp: '150.99',
        stock: 'In stock',
        rating:3.8,
        color: ['primary', 'danger', 'secondary'],
        size: ['S', 'M', 'L'],
        discount: '25%',
        type:'grocery'
    },
    {
        id: '4',
        img: 'assets/images/products/img-7.png',
        title: "Innovative education book",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 96.26,
        stock: 'In stock',
        rating:4.7,
        type:'kids'
    },
    {
        id: '5',
        img: 'assets/images/products/img-4.png',
        title: "Sangria Girls Mint Green & Off-White Solid Open Toe Flats",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 24.07,
        mrp: '96.26',
        stock: 'In stock',
        rating:4.7,
        color: ['success', 'danger', 'secondary'],
        size: ['40', '41', '42'],
        discount: '75%',
        type:'kids'
    },
    {
        id: '6',
        img: 'assets/images/products/img-5.png',
        title: "Lace-Up Casual Shoes For Men",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 229.00,
        stock: 'In stock',
        rating:4.0,
        color: ['danger'],
        size: ['40', '41', '42'],
        type:'fashion'
    },
    {
        id: '7',
        img: 'assets/images/products/img-6.png',
        title: "Striped High Neck Casual Men Orange Sweater",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 62.40,
        mrp: '120.00',
        stock: 'In stock',
        rating:4.8,
        size: ['S', 'M', 'L','XL'],
        discount: '48%',
        type:'fashion'
    },
    {
        id: '8',
        img: 'assets/images/products/img-9.png',
        title: "Lace-Up Casual Shoes For Men",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 194.65,
        mrp: '229.00',
        stock: 'In stock',
        rating:2.4,
        color:['light','warning'],
        size: ['S','L'],
        discount: '15%',
        type:'kids'
    },
    {
        id: '9',
        img: 'assets/images/products/img-10.png',
        title: "Printed, Typography Men Round Neck Black T-shirt",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 81.99,
        stock: 'In stock',
        rating:2.4,
        color:['dark','light'],
        size: ['S', 'M', 'L', 'XL'],
        type:'fashion'
    },
    {
        id: '10',
        img: 'assets/images/products/img-12.png',
        title: "Carven Lounge Chair Red",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 209.99,
        stock: 'In stock',
        rating:4.1,
        color: ['secondary', 'dark', 'danger', 'light'],
        type:'furniture'
    },
    {
        id: '11',
        img: 'assets/images/products/img-3.png',
        title: "Ninja Pro Max Smartwatch",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 247.27,
        mrp: '309.09',
        stock: 'In stock',
        rating:3.5,
        color:['secondary','info'],
        discount: '20%',
        type:'watches'
    },
    {
        id: '12',
        img: 'assets/images/products/img-2.png',
        title: "Opinion Striped Round Neck Green T-shirt",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: 126.99,
        stock: 'In stock',
        rating:4.1,
        color:['success'],
        size: ['S', 'M', 'L', 'XL'],
        type:'fashion'
    },
]


const brandproducts = [
    {
        id: '1',
        img: 'assets/images/products/img-12.png',
        title: "Carven Lounge Chair Red",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: '209.99',
        stock: 'In stock',
        rating:4.1,
        color:['secondary','warning','danger','light']
    },
    {
        id: '2',
        img: 'assets/images/products/img-7.png',
        title: "Innovative education book",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: '96.26',
        stock: 'In stock',
        rating:4.2
    },
    {
        id: '3',
        img: 'assets/images/products/img-3.png',
        title: "Ninja Pro Max Smartwatch",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: '247.27',
        mrp: '309.09',
        stock: 'In stock',
        rating:3.5,
        color:['secondary','info'],
        discount:'20%'
    },
    {
        id: '4',
        img: 'assets/images/products/img-2.png',
        title: "Opinion Striped Round Neck Green T-shirt",
        content: "T-Shirt house best black boys T-Shirt fully cotton material & all size available hirt fully cotton material & all size available.",
        price: '126.99',
        stock: 'In stock',
        rating:4.1,
        color:['success'],
        size: ['S','M','L','XL']
    }
]

export { productList , brandproducts }