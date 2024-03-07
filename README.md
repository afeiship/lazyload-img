# lazyload-img

> Lazyload image.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation

```shell
npm install @jswork/lazyload-img
```

## usage

```js
import LazyloadImg from '@jswork/lazyload-img';

LazyloadImg.init({
  selector: '.lazyload',
  interval: 300,
});
```

```css
img.lazy {
  background-color: #f5f5f5;
  opacity: 0;
  transition: opacity 0.6s;
}
```

## types

```ts
/// <reference types="@jswork/lazyload-img/global.d.ts" />
```

## license

Code released under [the MIT license](https://github.com/afeiship/lazyload-img/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/lazyload-img
[version-url]: https://npmjs.org/package/@jswork/lazyload-img
[license-image]: https://img.shields.io/npm/l/@jswork/lazyload-img
[license-url]: https://github.com/afeiship/lazyload-img/blob/master/LICENSE.txt
[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/lazyload-img
[size-url]: https://github.com/afeiship/lazyload-img/blob/master/dist/index.min.js
[download-image]: https://img.shields.io/npm/dm/@jswork/lazyload-img
[download-url]: https://www.npmjs.com/package/@jswork/lazyload-img
