interface LazyloadImgOptions {
  selector: string;
  interval: number;
}

type LazyElement = HTMLImageElement & { dataset: { src: string } };

const defaults: LazyloadImgOptions = {
  selector: 'img[data-src].lazy',
  interval: 300,
};

class LazyloadImg {
  private options: LazyloadImgOptions;
  private lazyloadThrottleTimeout: any;

  public static init(options: LazyloadImgOptions) {
    const instance = new LazyloadImg(options);
    instance.attachEvents();
    return instance;
  }

  constructor(inOptions: LazyloadImgOptions) {
    this.options = { ...defaults, ...inOptions };
  }

  lazyload = () => {
    if (this.lazyloadThrottleTimeout) {
      clearTimeout(this.lazyloadThrottleTimeout);
    }

    const lazyElements = document.querySelectorAll(this.options.selector) as NodeListOf<LazyElement>;

    this.lazyloadThrottleTimeout = setTimeout(() => {
      const scrollTop = window.scrollY || window.pageYOffset;
      lazyElements.forEach(function (img) {
        const { top } = img.getBoundingClientRect();
        if (top < window.innerHeight + scrollTop) {
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
        }
      });

      if (lazyElements.length == 0) {
        document.removeEventListener('DOMContentLoaded', this.lazyload);
        document.removeEventListener('scroll', this.lazyload);
        window.removeEventListener('resize', this.lazyload);
        window.removeEventListener('orientationChange', this.lazyload);
      }
    }, this.options.interval);
  };

  attachEvents() {
    document.addEventListener('DOMContentLoaded', this.lazyload);
    document.addEventListener('scroll', this.lazyload);
    window.addEventListener('resize', this.lazyload);
    window.addEventListener('orientationChange', this.lazyload);
  }
}

export default LazyloadImg;
