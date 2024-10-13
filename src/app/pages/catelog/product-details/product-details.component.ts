import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  slides: any
  qty: any = 1;
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  ngOnInit(): void {
    this.slides = [
      {
        previewImageSrc: 'assets/images/products/img-31.png'
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
    ]
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

}
