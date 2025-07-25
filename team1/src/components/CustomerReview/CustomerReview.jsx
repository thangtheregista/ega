import React from "react";
import "./CustomerReview.css";
import Carousel from 'react-bootstrap/Carousel';

export default function CustomerReview() {
    return (
        <div>
            <div className="review-container">
                <Carousel>
                    <Carousel.Item>
                        <img src="/images/customer_reviews/anh1.png" alt="Ảnh 1" className="review-img"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/images/customer_reviews/anh2.png" alt="Ảnh 2" className="review-img"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/images/customer_reviews/anh3.png" alt="Ảnh 3" className="review-img"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
