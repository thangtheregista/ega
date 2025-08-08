import "./productDetailSection.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useCart} from "../../hooks/CartContext.jsx";

import Swal from 'sweetalert2'

export default function ProductDetailSection() {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    const [mainImage, setMainImage] = useState([])


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products/`)

                const product = res.data.find((item) => String(item.id) === String(id));

                if (product) {
                    setProduct(product);
                    setMainImage(product.small1);
                    console.log(product);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [id]);

    const [quantity, setQuantity] = useState(1)
    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    const handleMinus = () => {
        setQuantity(quantity - 1)
    }
    const {addToCart} = useCart();

    const handleAddToCart = () => {
        const newItem = {
            id: product.id,
            name: product.name,
            price: product.salePrice,
            quantity: quantity,
            image: mainImage,
            checked: true
        }
        addToCart(newItem)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thêm vào giỏ hàng thành công",
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="product-page">

            <div className="product-page__left">
                <div className="product-thumbnails">
                    {[product.small1, product.small2, product.small3].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={index}
                            onClick={()=> setMainImage(img)}
                        />
                    ))}
                </div>


                <div className="product-main-image">
                    <img src={mainImage} alt="Sofa chính"/>
                </div>

            </div>

            <div className="product-info">
                <h1>{product.name}</h1>
                <div className="rating">{product.rating}</div>
                <div className="brand">Thương hiệu: EGA Furniture</div>
                <div className="price">
                    <span className="current">{product.salePrice}</span>
                    <span className="original">{product.originalPrice}</span>
                    <span className="discount">-50%</span>
                </div>
                <div className="note">Bán chạy</div>

                <h6>Mã giảm giá</h6>
                <div className="coupon-codes">
                    <button>EGAFREESHIP</button>
                    <button>GIAM50K</button>
                    <button>GIAM30</button>
                    <button>GIAM40</button>
                </div>

                {/*<div className="color">*/}
                {/*    <p>Màu sắc: Xám ghi</p>*/}
                {/*    <div className="color-options">*/}
                {/*        <span className="color-swatch"></span>*/}
                {/*        <span className="color-swatch selected"></span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <h6>
                    Số lượng
                </h6>
                <div className="quantity">
                    <button onClick={()=> handleMinus()} disabled={quantity <= 0} >-</button>
                    <input type="number" value={quantity}/>
                    <button onClick={()=> handlePlus()}>+</button>
                </div>

                <div className="actions">
                    <button className="add-to-cart" onClick={() => handleAddToCart()}>THÊM VÀO GIỎ</button>
                    <button className="buy-now">MUA NGAY</button>
                </div>
            </div>
        </div>
    )
}