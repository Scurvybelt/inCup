import { Component } from "@angular/core";

// Data Get
import { productGrid } from "../product-grid-right/data";
import { ProductsService } from "src/app/core/services/products.service";

@Component({
    selector: "app-product-grid",
    templateUrl: "./product-grid.component.html",
    styleUrls: ["./product-grid.component.scss"],
})
export class ProductGridComponent {
    products: any;
    rating: any;
    discount: any;

    first: number = 0;
    endIndex: number = 12;

    rangeValues: number[] = [0, 2000];
    range1: any;
    range2: any;

    sortOptions: any;
    sortOrder: any;
    sortField: any;
    productos: any;
    categories: any;
    filtrosProductos: any;
    notFound: boolean = false;
    rows: number = 2;

    constructor(private servicioProductos: ProductsService) {
        this.rating = [
            { name: "4 & Above", value: "4" },
            { name: "3 & Above", value: "3" },
            { name: "2 & Above", value: "2" },
            { name: "1", value: "1" },
        ];

        this.discount = [
            { name: "50% or more", value: "50" },
            { name: "40% or more", value: "40" },
            { name: "30% or more", value: "30" },
            { name: "20% or more", value: "20" },
            { name: "10% or more", value: "10" },
        ];
    }

    ngOnInit(): void {

        this.servicioProductos.getCatalogo('category').subscribe(data => {
            console.log(data);
            this.categories = data;
        })

        this.servicioProductos.getProducts().subscribe((data: any) => {
            this.productos = data;
            console.log(this.productos);
            this.filtrosProductos = data;
        });

        // this.products = productGrid;
        this.range1 = "$ " + this.rangeValues[0];
        this.range2 = "$ " + this.rangeValues[1];
    }

    // Range Slider
    handleChange(e: any) {
        console.log(e);
        this.range1 = "$ " + e.values[0];
        this.range2 = "$ " + e.values[1];

        let min = e.values[0];
        let max = e.values[1];
        
        this.filtrosProductos = this.productos.filter((producto: any)=> {
            const price = parseInt(producto.price, 10);
            return producto.price >= min && producto.price <= max
        });

        // this.filtrosProductos = this.productos.filter((producto: any) => {
        //     return producto.price  ;
        // });
    }

    buscarPalabra(e: any){
        console.log(e);

        if(!e){
            
            this.filtrosProductos = this.productos
        }else{
            const palabraMinuscula = e.toLowerCase();
            console.log(palabraMinuscula);
 
            this.filtrosProductos = this.productos.filter((producto: any) => {
                return producto.name.toLowerCase().includes(palabraMinuscula);
            })
            console.log(this.filtrosProductos.length)
            if(this.filtrosProductos.length === 0){
                this.notFound = true;
            }else{
                this.notFound = false;
            }

        }
    }

    paginate() {
        const start = this.first;
        const end = this.first + this.rows;
        this.filtrosProductos = this.productos.slice(start, end);
    }
    

    // Pagination
    onPageChange(event: any) {
        console.log(event);
        this.first = event.first;
        this.rows = event.rows;
        this.paginate();
    }

    // Sorting
    onSortChange(event: any) {
        let value = event.target.value;
        console.log(value)
        if (value == "low_to_high") {
            this.filtrosProductos.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
        } else if (value == "high_to_low") {
            this.filtrosProductos.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
        } else {
            
        }
    }

    filtros(event: any){
        console.log(event);
        let tipo: String;
        if(event == 1){
            tipo = 'Bebida Caliente'
        }else{
            tipo = 'Bebida Fria'
        }
        this.filtrosProductos = this.productos.filter((producto: any) => {
            return producto.category === tipo;
        });
    
    }
}
