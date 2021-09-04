import { ReactElement, createElement, createRef, useEffect } from 'react';

import { LazyLoad } from '@components/lazyimage/LazyLoad';

interface ILazyImage {
  id?: string;
  className?: string;
  alt?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  src?: string;
  srcset?: string;
  attributeNameSrc?: string;
  attributeNameSrcset?: string;
  classNameLoaded?: string;
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number;
}

const LazyImage = (
  {
    id,
    className,
    alt,
    width,
    height,
    placeholder,
    src,
    srcset,
    attributeNameSrc,
    attributeNameSrcset,
    classNameLoaded,
    root,
    rootMargin,
    threshold,
  }: ILazyImage): JSX.Element => {

  const plchldr: string = placeholder || `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=`;

  const thisRef = createRef<HTMLImageElement>();

  useEffect(() => {
    if (thisRef.current) {
      new LazyLoad(
        {
          attributeNameSrc,
          attributeNameSrcset,
          classNameLoaded,
          root,
          threshold,
          rootMargin,
        },
        [thisRef.current],
      );
    }
  }, [
    thisRef,
    attributeNameSrc,
    attributeNameSrcset,
    classNameLoaded,
    root,
    rootMargin,
    threshold,
  ]);

  const img: HTMLImageElement | ReactElement = createElement(
    'img',
    {
      ref: thisRef,
      id,
      className: (className || ''),
      alt,
      width,
      height,
      [attributeNameSrc || 'data-src']: src,
      [attributeNameSrcset || 'data-srcet']: srcset,
      src: plchldr,
    },
    null,
  );

  return <>{img}</>;
};

export default LazyImage;
