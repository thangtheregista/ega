import React from "react";
import "./modern-furniture.css"
import HoverImage from "../HoverImage/hoverImage.jsx";
import axios from "axios";
import {Link} from "react-router-dom";
function ModernFurniture() {
    const [furnitures, setFurnitures] = React.useState([]);
    const fetchFurnitures = async () => {
        try {
            const response = await axios.get("https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products?category=furnitures");
            setFurnitures(response.data);
        } catch (error) {
            console.error("Error fetching furniture data:", error);
        }
    };
    React.useEffect(() => {
        fetchFurnitures();
    }, []);
    const [picLinks, setPicLinks] = React.useState({});
    const handlePicLinkClick = (furnitureId, picUrl) => {
        setPicLinks(prev => ({
            ...prev,
            [furnitureId]: picUrl
        }));
    };
    return (
        <>
            <div className="modern-furniture-container">
                <h4 style={{color: "#ec720e"}}>NEW ARRIVAL</h4>
                <div className="mf-header">
                    <h2>NỘI THẤT HIỆN ĐẠI</h2>
                    <a href="#watch-mf">Xem tất cả</a>
                </div>
                <div className="furniture-list">
                    {furnitures.map((furniture) => (
                        <div className="furniture-item" key={furniture.id}>
                            <div className="furniture-img">
                                <Link to={`/ega/product/${furniture.id}`} className="router-link">
                                    <HoverImage pic={furniture.pic} pic2={furniture.pic2} picName={furniture.name} picLink={picLinks[furniture.id] || ""} />
                                </Link>
                            </div>
                            <Link to={`/ega/product/${furniture.id}`} className="router-link">
                                <h5>{furniture.name}</h5>
                            </Link>
                            <strong>{furniture.rating}</strong> <br/>
                            <strong style={{color: "red"}}>{furniture.salePrice}</strong>
                            <div className="mf-original-price">
                                <p style={{color: "#969696", textDecoration: "line-through"}}>{furniture.originalPrice}</p>
                                <div className="mf-sale-num">{furniture.salePercent}</div>
                            </div>
                            <div className="mf-smallPics">
                                {[furniture.small1, furniture.small2, furniture.small3].map((img, idx) => {
                                    const selectedPic = picLinks[furniture.id] || furniture.small1;
                                    const isSelected = selectedPic === img;
                                    return (
                                        <img
                                            key={img}
                                            src={img}
                                            alt={`Small pic ${idx + 1}`}
                                            onClick={() => handlePicLinkClick(furniture.id, img)}
                                            style={{ border: isSelected ? "1.5px solid black" : "1px solid #c8c8c8" }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ModernFurniture;