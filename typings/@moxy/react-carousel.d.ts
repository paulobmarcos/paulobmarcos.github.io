declare module '@moxy/react-carousel' {
  interface Props {
    children: React.ReactNode;

    arrows?: boolean;
    dots?: boolean;
    disableNativeScroll?: boolean;
    draggable?: boolean;
    infinite?: boolean;
    keyboardControl?: boolean;
    resetCurrentOnResize?: boolean;
    swapOnDragMoveEnd?: boolean;

    autoplayIntervalMs?: number;
    autoplayDirection?: 'ltr' | 'rtl';
    offset?: number | (() => number);
    slideSnapEasing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
    slideSnapDuration?: number;
    slideTransitionEasing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
    slideTransitionDuration?: number;
    touchSwipeVelocityThreshold?: number;
    touchCrossAxisScrollThreshold?: number;

    current?: number;
    beforeChange?: () => void;
    afterChange?: () => void;
    renderArrows?: () => void;
    renderDots?: () => void;

    wrapperClassName?: string;
    carouselClassName?: string;
    sliderClassName?: string;
    arrowClassName?: string;
    dotContainerClassName?: string;
    dotClassName?: string;
    modifierDraggableClassName?: string;
    modifierDraggingClassName?: string;
    modifierCurrentClassName?: string;
    modifierDisableScrollClassName?: string;
    modifierLeftClassName?: string;
    modifierRightClassName?: string;
  }

  function Carousel(props: Props): JSX.Element;
  export = Carousel;
}
