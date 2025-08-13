import React from "react";
import "./flash-sale.css"
import FlashSaleCountdown from "../flash-sale-countdown/flash-sale-countdown.jsx";
import CouponList from "../CouponList/CouponList.jsx";
import FlashSaleProducts from "../flash-sale-products/flash-sale-products.jsx";
import FlashSaleWatched from "../flash-sale-watched/flash-sale-watched.jsx";
function FlashSale() {
    return (
        <>
            <div className="flash-sale-container">
                <div className="fs-banner">
                    <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/flashsale_banner.png?1746582633520" alt="FlashSale Banner" />
                </div>
                <FlashSaleCountdown initHours={8} initMinutes={2} initSeconds={27} />
                <CouponList />
                <div className="fs-allProducts">
                    <FlashSaleProducts />
                </div>
                <div className="fs-watched">
                    <FlashSaleWatched />
                </div>
            </div>
        </>
    )
}
export default FlashSale;