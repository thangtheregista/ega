import React from "react";
import "./kitchen-furniture.css"
import axios from "axios";
import HoverImage from "../HoverImage/hoverImage.jsx";
function KitchenFurniture() {
    const [kitchenFurnitures, setKitchenFurnitures] = React.useState([]);
    const fetchKitchenFurnitures = async () => {
        try {
            const response = await axios.get("https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products?category=kitchen");
            setKitchenFurnitures(response.data);
        } catch (error) {
            console.error("Error fetching kitchen furniture data:", error);
        }
    };
    React.useEffect(() => {
        fetchKitchenFurnitures();
    }, []);
    const [picLinks, setPicLinks] = React.useState({});
    const handlePicLinkClick = (kitchenId, picUrl) => {
        setPicLinks(prev => ({
            ...prev,
            [kitchenId]: picUrl
        }));
    };
    return (
        <>
            <div className="kitchen-furniture-container">
                <h4 style={{color: "#ec720e"}}>ƯU ĐÃI</h4>
                <div className="kf-header">
                    <h2>NỘI THẤT PHÒNG BẾP</h2>
                    <a href="#watch-kf">Xem tất cả</a>
                </div>
                <div className="kitchen-furniture-list">
                    {kitchenFurnitures.map((kitchen) => (
                        <div className="kitchen-furniture-item" key={kitchen.id}>
                            <div className="kitchen-furniture-img">
                                <HoverImage pic={kitchen.pic} pic2={kitchen.pic2} picName={kitchen.name} picLink={picLinks[kitchen.id] || ""} />
                            </div>
                            <h5>{kitchen.name}</h5>
                            <strong>{kitchen.rating}</strong> <br/>
                            <strong style={{color: "red"}}>{kitchen.salePrice}</strong>
                            <div className="kf-original-price">
                                <p style={{color: "#969696", textDecoration: "line-through"}}>{kitchen.originalPrice}</p>
                                <div className="kf-sale-num">{kitchen.salePercent}</div>
                            </div>
                            <div className="kf-smallPics">
                                {[kitchen.small1, kitchen.small2, kitchen.small3].map((img, idx) => {
                                    const selectedPic = picLinks[kitchen.id] || kitchen.small1;
                                    const isSelected = selectedPic === img;
                                    return (
                                        <img
                                            key={img}
                                            src={img}
                                            alt={`Small pic ${idx + 1}`}
                                            onClick={() => handlePicLinkClick(kitchen.id, img)}
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
export default KitchenFurniture;