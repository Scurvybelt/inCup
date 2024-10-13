import { Component, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

// import { SwiperComponent } from 'ngx-useful-swiper';
// import { SwiperOptions } from 'swiper';
import { sliders, top_product } from './data';

@Component({
  selector: 'app-trend-fashion',
  templateUrl: './trend-fashion.component.html',
  styleUrls: ['./trend-fashion.component.scss']
})
export class TrendFashionComponent {

  swiperdata: any;
  products: any;
  private _trialEndsAt: any;
  private _diff?: any;
  _days?: number;
  _hours?: number;
  _minutes?: number;
  _seconds?: number;

  // @ViewChild('usefulSwiper', { static: false }) usefulSwiper?: SwiperComponent;

  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById('footer-container')?.classList.remove('container')
      document.getElementById('footer-container')?.classList.add('container-fluid', 'container-custom')
    }, 0);

    this.swiperdata = sliders
    this.products = top_product

    // Date Set
    this._trialEndsAt = "2025-08-15";

    /**
     * Count date set
     */
    interval(1000).pipe(map((x) => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    })).subscribe((x) => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });

  }


  // NavAndPaginatoion option
  NavAndPagination = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  };

  // config: SwiperOptions = {
  //   pagination: { el: '.swiper-pagination', clickable: true },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   slidesPerView: 5,
  //   spaceBetween: 20,
  //   loop: true
  // };

  // next() {
  //   this.usefulSwiper?.swiper.slideNext()
  // }
  // prev() {
  //   this.usefulSwiper?.swiper.slidePrev()
  // }

  /**
  * Day Set
  */
  getDays(t: number) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  /**
   * Hours Set
   */
  getHours(t: number) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  /**
   * Minutes set
   */
  getMinutes(t: number) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  /**
   * Secound set
   */
  getSeconds(t: number) {
    return Math.floor((t / 1000) % 60);
  }

}
