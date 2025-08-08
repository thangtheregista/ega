import {BiDollar} from "react-icons/bi";
import React from "react";
import { FaSackDollar } from "react-icons/fa6";

export default function RevenueCard() {
    return(
        <div className="card-container">
            <div className="card-content">
                <div className="text-section">
                    <p className="card-title">DOANH THU</p>
                    <h2 className="card-number">$45K</h2>
                    <div className="card-status">
                        <span className="status-down" style={{
                            color: "#65C15C"
                        }}>↑ 30%</span>
                        <span className="status-desc">Từ tháng trước</span>
                    </div>
                </div>
                <div className="icon-section">
                    <div className="icon-circle" style={{
                        backgroundColor: "#635BFF"
                    }}>
                        <FaSackDollar className="card-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}