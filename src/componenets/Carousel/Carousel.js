import React from "react";
import "./Carousel.css";

export const CarouselItem = ({ children, width, onPrev, onNext }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <button className="prev-btn" onClick={onPrev}>Prev</button>
            {children}
            <button className="next-btn" onClick={onNext}>Next</button>
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex);
    };

    const goToPreviousSlide = () => {
        updateIndex(activeIndex - 1);
    };

    const goToNextSlide = () => {
        updateIndex(activeIndex + 1);
    };

    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {
                        width: "100%",
                        onPrev: goToPreviousSlide,
                        onNext: goToNextSlide
                    });
                })}
            </div>
        </div>
    );
};

export default Carousel;
