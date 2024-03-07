interface LazyloadImgOptions {
  selector: string;
}

const defaults: LazyloadImgOptions = {
  selector: 'img[data-src].lazy',
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

    const lazyElements = document.querySelectorAll(this.options.selector) as NodeListOf<HTMLImageElement>;

    this.lazyloadThrottleTimeout = setTimeout(() => {
      var scrollTop = window.pageYOffset;
      lazyElements.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
        }
      });

      if (lazyElements.length == 0) {
        document.removeEventListener('scroll', this.lazyload);
        window.removeEventListener('resize', this.lazyload);
        window.removeEventListener('orientationChange', this.lazyload);
      }
    }, 20);
  };

  attachEvents() {
    document.addEventListener('DOMContentLoaded', this.lazyload);
    document.addEventListener('scroll', this.lazyload);
    window.addEventListener('resize', this.lazyload);
    window.addEventListener('orientationChange', this.lazyload);
  }
}

export default LazyloadImg;
