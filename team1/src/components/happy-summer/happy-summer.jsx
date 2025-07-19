import "./happy-summer.css"
import React, {useEffect} from "react";
import axios from "axios";
import {ProgressBar} from "react-bootstrap";
import HoverImage from "../HoverImage/hoverImage.jsx";
import CountDownTimer from "../CountdownTimer/countdown-timer.jsx";
function HappySummer() {
    const [sofas, setSofas] = React.useState([]);
    const fetchSofas = async () => {
        try {
            const reponse = await axios.get("https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/sofas")
            setSofas(reponse.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchSofas();
    }, [])
    const [picLinks, setPicLinks] = React.useState({});
    const handlePicLinkClick = (sofaId, picUrl) => {
        setPicLinks(prev => ({
            ...prev,
            [sofaId]: picUrl
        }));
    };
    return (
        <>
            <div className="happy-summer-container">
                <div className="hs-header">
                    <h2>HAPPY SUMMER - GIẢM ĐẾN 50% <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/flashsale-hot.png?1746582633520" alt="Sale-icon" className="sale-icon"/></h2>
                    <CountDownTimer initHours={13} initMinutes={22} initSeconds={11} />
                </div>
                <div className="hs-body">
                    {sofas.map((sofa) => (
                        <div className="hs-item" key={sofa.id}>
                            <div className="hs-img">
                                <HoverImage pic={sofa.pic} pic2={sofa.pic2} picName={sofa.name} picLink={picLinks[sofa.id] || ""} />
                                {sofa.mark && (
                                    <div className="hs-mark">{sofa.mark}</div>
                                )}
                                {sofa.note && (
                                    <div className="hs-note">{sofa.note}</div>
                                )}
                            </div>
                            <h5>{sofa.name}</h5>
                            <strong>{sofa.rating}</strong> <br/>
                            <strong style={{color: "red"}}>{sofa.salePrice}</strong>
                            <div className="original-price">
                            <p style={{color: "#969696", textDecoration: "line-through"}}>{sofa.originalPrice}</p> <div className="sale-num">-50%</div>
                            </div>
                            <div className="hs-smallPics">
                                {[sofa.small1, sofa.small2, sofa.small3].map((img, idx) => {
                                    const selectedPic = picLinks[sofa.id] || sofa.small1;
                                    const isSelected = selectedPic === img;
                                    return (
                                        <img
                                            className="small-pics"
                                            key={img}
                                            src={img}
                                            alt={`Small${idx + 1}`}
                                            onClick={() => handlePicLinkClick(sofa.id, img)}
                                            style={{border: isSelected ? "1.5px solid black" : "1px solid #c8c8c8"}}
                                        />
                                    )
                                })}
                            </div>
                            <p className="hs-sold">{sofa.sold}</p>
                            <ProgressBar style={{height: "7px", borderRadius: "50px"}}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${sofa.progress}%`,
                                        background: "linear-gradient(to right, #f1c40f, #e67e22, #e74c3c)"
                                    }}
                                />
                            </ProgressBar>

                        </div>
                    ))}
                </div>
                <button className="hs-btn">Xem tất cả</button>
            </div>
        </>
    )
}
export default HappySummer;