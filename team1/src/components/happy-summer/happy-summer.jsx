import "./happy-summer.css"
import React, {useEffect} from "react";
import axios from "axios";
import {ProgressBar} from "react-bootstrap";
function HappySummer() {
    const [sofas, setSofas] = React.useState([]);
    const fetchSofas = async () => {
        try {
            const reponse = await axios.get("http://localhost:3001/sofas")
            setSofas(reponse.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchSofas();
    }, [])
    return (
        <>
            <div className="happy-summer-container">
                <div className="hs-header">
                    <h2>HAPPY SUMMER - GIẢM ĐẾN 50% <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/flashsale-hot.png?1746582633520" alt="Sale-icon" className="sale-icon"/></h2>
                </div>
                <div className="hs-body">
                    {sofas.map((sofa) => (
                        <div className="hs-item" key={sofa.id}>
                            <div className="hs-img">
                                <img src={sofa.pic} alt={sofa.name} />
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