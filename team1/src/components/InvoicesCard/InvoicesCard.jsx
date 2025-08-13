import { TbInvoice } from "react-icons/tb";
import React from "react";

export default function InvoicesCard() {
    return(
        <div className="card-container">
            <div className="card-content">
                <div className="text-section">
                    <p className="card-title">HÓA ĐƠN</p>
                    <h2 className="card-number">10,905</h2>
                    <div className="card-status">
                        <span className="status-down" style={{
                            color: "#65C15C"
                        }}>↑ 50%</span>
                        <span className="status-desc">Từ tháng trước</span>
                    </div>
                </div>
                <div className="icon-section">
                    <div className="icon-circle" style={{
                        backgroundColor: "#FFB829"
                    }}>
                        <TbInvoice  className="card-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}