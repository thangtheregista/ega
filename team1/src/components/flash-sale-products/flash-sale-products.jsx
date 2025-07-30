import React from "react";
import "./flash-sale-products.css"
import axios from "axios";
import HoverImage from "../HoverImage/hoverImage.jsx";
import {Link} from "react-router-dom";
function FlashSaleProducts() {
    const [flashSaleProducts, setFlashSaleProducts] = React.useState([]);
    const fetchFlashSaleProducts = async () => {
        try {
            const response = await axios.get("https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products?category=sofas");
            setFlashSaleProducts(response.data);
        } catch (error) {
            console.error("Error fetching flash sale products:", error);
        }
    };
    React.useEffect(() => {
        fetchFlashSaleProducts();
    }, []);
    const [picLinks, setPicLinks] = React.useState({});
    const handlePicLinkClick = (productId, picUrl) => {
        setPicLinks(prev => ({
            ...prev,
            [productId]: picUrl
        }));
    }
    return (
        <>
            <div className="flash-sale-products-container">
                {flashSaleProducts.map((product) => (
                    <div className="fs-item" key={product.id}>
                        <div className="fs-img">
                            <Link to={`/ega/product/${product.id}`} className="router-link">
                                <HoverImage pic={product.pic} pic2={product.pic2} picName={product.name} picLink={picLinks[product.id] || ""} />
                            </Link>
                            {product.mark && (
                                <div className="fs-mark">{product.mark}</div>
                            )}
                            {product.note && (
                                <div className="fs-note">{product.note}</div>
                            )}
                        </div>
                        <Link to={`/ega/product/${product.id}`} className="router-link">
                            <h5>{product.name}</h5>

                        </Link>
                        <strong>{product.rating}</strong> <br/>
                        <strong style={{ color: "red" }}>{product.salePrice}</strong>
                        <div className="fs-original-price">
                            <p style={{ color: "#969696", textDecoration: "line-through" }}>{product.originalPrice}</p>
                            <div className="fs-sale-num">-50%</div>
                        </div>
                        <div className="fs-smallPics">
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
export default FlashSaleProducts;