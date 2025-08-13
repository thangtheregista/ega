import React from 'react';

const NewSofaBanner = () => {
    return (
        <section className="section_product_top section">
            <div className="container card border-0">
                <div className="slideshow-banner-wrap">
                    <div className="section-slideshow-banner mb-3 btn-slide--new">
                        <div className="items text-center">
                            <a href="/collections/all" title="image">
                                <picture>
                                    <source
                                        media="(max-width: 480px)"
                                        srcSet="//bizweb.dktcdn.net/thumb/large/100/491/756/themes/956460/assets/slide_product_2_img_1_img.jpg?1746582633520"
                                    />
                                    <img
                                        className="img-fluid mx-auto"
                                        loading="lazy"
                                        src="//bizweb.dktcdn.net/100/491/756/themes/956460/assets/slide_product_2_img_1_img.jpg?1746582633520"
                                        width="1300"
                                        height="652"
                                        alt="Sofa mới về"
                                    />
                                </picture>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewSofaBanner;
