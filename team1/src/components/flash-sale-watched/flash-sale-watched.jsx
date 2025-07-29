import React from "react";
import "./flash-sale-watched.css"
import axios from "axios";
import HoverImage from "../HoverImage/hoverImage.jsx";
function FlashSaleWatched() {
    const [watchedProducts, setWatchedProducts] = React.useState([]);
    const fetchWatchedProducts = async () => {
        try {
            const response = await axios.get("https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products?category=sofas");
            setWatchedProducts(response.data);
        } catch (error) {
            console.error("Error fetching watched products:", error);
        }
    };
    React.useEffect(() => {
        fetchWatchedProducts();
    }, []);
    const [picLinks, setPicLinks] = React.useState({});
    const handlePicLinkClick = (watchedId, picUrl) => {
        setPicLinks(prev => ({
            ...prev,
            [watchedId]: picUrl
        }));
    }
    return (
        <>
            <h1 style={{margin: "20px 20px 0 20px"}}>Sản phẩm đã xem</h1>
            <div className="flash-sale-watched-container">
                {watchedProducts.slice(0, 5).map((product) => (
                    <div className="watched-item" key={product.id}>
                        <div className="watched-img">
                            <HoverImage pic={product.pic} pic2={product.pic2} picName={product.name} picLink={picLinks[product.id] || ""} />
                        </div>
                        <h5>{product.name}</h5>
                        <strong>{product.rating}</strong> <br/>
                        <strong style={{ color: "red" }}>{product.salePrice}</strong>
                        <div className="watched-original-price">
                            <p style={{ color: "#969696", textDecoration: "line-through" }}>{product.originalPrice}</p>
                            <div className="watched-sale-num">-50%</div>
                        </div>
                        <div className="watched-smallPics">
                            {[product.small1, product.small2, product.small3].map((img, idx) => {
                                const selectedPic = picLinks[product.id] || product.small1;
                                const isSelected = selectedPic === img;
                                return (
                                    <img
                                        key={img}
                                        src={img}
                                        alt={`Small pic ${idx + 1}`}
                                        onClick={() => handlePicLinkClick(product.id, img)}
                                        style={{border: isSelected ? "1.5px solid black" : "1px solid #c8c8c8"}}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default FlashSaleWatched;
