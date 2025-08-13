import React from "react";
import "./latestProducts.css"
import axios from "axios";
import {useEffect} from "react";
export default function LatestProducts() {
    const [latestProducts, setLatestProducts] = React.useState([]);
    const fetchLatestProducts = async () => {
        try {
            const response = await axios.get("https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products?category=sofas");
            setLatestProducts(response.data.sort((a, b) => new Date(b.date) - new Date(a.date)));
        } catch (error) {
            console.error("Error fetching watched products:", error);
        }
    }
    useEffect(() => {
        fetchLatestProducts();
    },[])
    return (
        <div className="latest-products__card">
            <div className="card__header">Hàng mới về</div>
            <ul className="card__list">
                {latestProducts.map((product) => (
                    <li className="card__item" key={product.id}>
                        <img className="card__image" src={product.pic} alt={product.name}/>
                        <div className="card__info">
                            <p className="card__title">{product.name}</p>
                            <p className="card__date">Cập nhật ngày {product.date}</p>
                        </div>
                        <div className="card__options">⋮</div>
                    </li>
                ))}
            </ul>
            <div className="card__footer">
                <a className="card__footer-link" href="#">Xem tất cả →</a>
            </div>
        </div>
    )
}