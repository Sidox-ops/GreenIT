import { Component, createEffect, createSignal } from "solid-js";
import "./Carousel.style.css";

type Props = {
    images: any;
};

const Carousel: Component<Props> = (props: Props) => {
    const images = props.images;
    const [imageRefs, setImageRefs] = createSignal<
        Array<HTMLImageElement | null>
    >([]);

    createEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target as HTMLImageElement;
                    lazyImage.src = lazyImage.dataset.src!;
                    observer.unobserve(lazyImage);
                }
            });
        });

        imageRefs().forEach((imageRef) => {
            if (imageRef) {
                observer.observe(imageRef);
            }
        });

        return () => {
            observer.disconnect();
        };
    });

    createEffect(() => {
        setImageRefs(
            Array.from({ length: images.length }).map(() => {
                return null;
            })
        );
    }, [images]);

    return (
        <section class="carousel" aria-label="carousel" tabindex="0">
            <div class="slides">
                {images.map((image: any, index: any) => {
                    return (
                        <div
                            class="slide"
                            id={`slide-${index + 1}`}
                            aria-hidden="true"
                            style={{ display: "flex" }}
                        >
                            <img
                                data-src={`/src/assets/cars/${image}`}
                                alt={index}
                                ref={(el) => (imageRefs()[index] = el)}
                            />
                        </div>
                    );
                })}
            </div>
            <div class="carousel__nav">
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
