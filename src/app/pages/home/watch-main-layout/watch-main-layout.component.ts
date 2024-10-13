import { Component, ViewChild } from '@angular/core';
// import { SwiperComponent } from 'ngx-useful-swiper';
import { OverlayPanel } from 'primeng/overlaypanel';
// import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-watch-main-layout',
  templateUrl: './watch-main-layout.component.html',
  styleUrls: ['./watch-main-layout.component.scss']
})
export class WatchMainLayoutComponent {
  videoPlay: boolean = false;

  // @ViewChild('usefulSwiper', { static: false }) usefulSwiper?: SwiperComponent;
  @ViewChild('overlayPanel') overlayPanel!: OverlayPanel;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.videoPlay = true;
  }

  showPopover(event: Event) {
    this.overlayPanel.toggle(event);
  }

  // Swiper option
  NavAndPagination = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true
  };


  // next() {
  //   this.usefulSwiper?.swiper.slideNext()
  // }
  // prev() {
  //   this.usefulSwiper?.swiper.slidePrev()
  // }

  addtobookmark(event: any) {
    event.target.closest('a').classList.toggle('active')
  }

}
