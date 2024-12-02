import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  slides: any
  qty: any = 1;
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  id: any;
  productoDetalle: any;
  whatsappLink: string = '';
  nombreProducto: any;

  constructor(private route: ActivatedRoute, private productoServicio: ProductsService){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.loadProductDetails();
    // this.generateWhatsAppLink();
    
  }

  async loadProductDetails() {
    if (this.id) {
      try {
        const data = await this.productoServicio.getProducById(this.id).toPromise();
        if (data) {
          this.productoDetalle = data;
          this.nombreProducto = this.productoDetalle[0].name;
          console.log(this.nombreProducto);
          console.log(this.productoDetalle[0]);

          this.slides = [
            {
              previewImageSrc: this.productoDetalle.img
            },
            {
              previewImageSrc: 'assets/images/products/img-32.png'
            },
            {
              previewImageSrc: 'assets/images/products/img-33.png'
            },
            {
              previewImageSrc: 'assets/images/products/img-34.png'
            },
            {
              previewImageSrc: 'assets/images/products/img-32.png'
            }
          ];
        }
        await this.generateWhatsAppLink();
      } catch (error) {
        console.error('Error loading product details:', error);
      }
    }
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  config = {
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    arrows: false
  }


  slidePreview(id: any, event: any) {
    const swiper = document.querySelectorAll('.swiperlist')

    swiper.forEach((el: any) => {
      el.classList.remove('swiper-slide-thumb-active')
    })
    event.target.closest('.swiperlist').classList.add('swiper-slide-thumb-active')
    this.slickModal.slickGoTo(id)
  }

  slickChange(event: any) {
    const swiper = document.querySelectorAll('.swiperlist')
    console.log(swiper)
    console.log(event.currentSlide)
  }

  // Increment Decrement Quantity
  updateqty(id: any) {
    if (id == '0' && this.qty > 1) {
      this.qty--;
    }
    if (id == '1') {
      this.qty++;
    }
  }

  async generateWhatsAppLink() {
    const phoneNumber = '5215566968800'; // Número de teléfono en formato internacional
    const message = `Hola, estoy interesado en el producto ${this.nombreProducto}.`;
    this.whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }

}
