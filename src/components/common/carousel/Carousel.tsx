//create a component

import { Component } from "solid-js";
import "./Carousel.style.css";

type Props = {
    images: any;
};

const Carousel: Component<Props> = (props: Props) => {
    const images = props.images;
    return (
        <section class="carousel" aria-label="carousel" tabindex="0">
            <div class="slides">
                {images.map((image: any, index: any) => {
                    return (
                        <div
                            class="slide"
                            id={`slide-${index + 1}`}
                            aria-hidden="true"
                        >
                            <img
                                src={`/src/assets/cars/${image}`}
                                alt={index}
                            />
                        </div>
                    );
                })}
                {/* <div
                    class="slides-item slide-1"
                    id="slide-1"
                    aria-label="slide 1 of 5"
                    tabindex="0"
                >
                    1
                </div>
                <div
                    class="slides-item slide-2"
                    id="slide-2"
                    aria-label="slide 2 of 5"
                    tabindex="0"
                >
                    2
                </div>
                <div
                    class="slides-item slide-3"
                    id="slide-3"
                    aria-label="slide 3 of 5"
                    tabindex="0"
                >
                    3
                </div>
                <div
                    class="slides-item slide-4"
                    id="slide-4"
                    aria-label="slide 4 of 5"
                    tabindex="0"
                >
                    4
                </div>
                <div
                    class="slides-item slide-5"
                    id="slide-5"
                    aria-label="slide 5 of 5"
                    tabindex="0"
                >
                    5
                </div> */}
            </div>
            <div class="carousel__nav">
                {/* <a
                    class="slider-nav"
                    href="#slide-1"
                    aria-label="Go to slide 1"
                >
                    1
                </a>
                <a
                    class="slider-nav"
                    href="#slide-2"
                    aria-label="Go to slide 2"
                >
                    2
                </a>
                <a
                    class="slider-nav"
                    href="#slide-3"
                    aria-label="Go to slide 3"
                >
                    3
                </a>
                <a
                    class="slider-nav"
                    href="#slide-4"
                    aria-label="Go to slide 4"
                >
                    4
                </a>
                <a
                    class="slider-nav"
                    href="#slide-5"
                    aria-label="Go to slide 5"
                >
                    5
                </a> */}

                {images.map((image: any, index: any) => {
                    return (
                        <a
                            class="slider-nav"
                            href={`#slide-${index + 1}`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index + 1}
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Carousel;
