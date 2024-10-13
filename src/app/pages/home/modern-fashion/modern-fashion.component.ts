import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

// import { SwiperOptions } from 'swiper';
import { products } from './data';

@Component({
  selector: 'app-modern-fashion',
  templateUrl: './modern-fashion.component.html',
  styleUrls: ['./modern-fashion.component.scss']
})

export class ModernFashionComponent {
  products: any;
  private _trialEndsAt: any;
  private _diff?: any;
  _days?: number;
  _hours?: number;
  _minutes?: number;
  _seconds?: number;

  ngOnInit(): void {

    setTimeout(() => {
      document.getElementById('footer-container')?.classList.remove('container')
      document.getElementById('footer-container')?.classList.add('container-fluid', 'container-custom')
    }, 0);

    this.products = products

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

  addtobookmark(event: any) {
    event.target.closest('a').classList.toggle('active')
  }

  // NavAndPaginatoion option
  NavAndPagination = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    loop: true
  };
}
