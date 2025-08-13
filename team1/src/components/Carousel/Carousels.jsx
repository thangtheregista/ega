import "./carousels.css"
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";


export default function Carousels() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        console.log('selected index: ', selectedIndex)
        setIndex(selectedIndex);
    };
    const slides = [
        {
            "image": "https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/slider_1.jpg?1746582633520",
            "title": "Avatar: The Way of Water",
            "subTitle": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
            "interval": 5000
        },
        {
            "image": "https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/slider_2.jpg?17465826335202",
            "title": "Black Adam",
            "subTitle": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
            "interval": 5000
        },
    ]
    return(
        <div className="carousels">
            <div className="carousels-wrapper">
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed"/>}
                    className="custom-carousel"
                >
                    {slides.map((slide) => (
                        <Carousel.Item key={slide.image} interval={slide.interval}>
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt="First slide"
                            />
                            {/*<Carousel.Caption>*/}
                            {/*    <h3>{slide.title}</h3>*/}
                            {/*    <p>{slide.subTitle}</p>*/}
                            {/*</Carousel.Caption>*/}
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

        </div>
    )
}