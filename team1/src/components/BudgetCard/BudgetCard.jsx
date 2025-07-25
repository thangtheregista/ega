
import React from "react";
import "../TotalCustomersCard/TotalCustomersCard.css";
import { BiDollar } from "react-icons/bi";


export default function BudgetCard() {
    return(
        <div className="card-container">
            <div className="card-content">
                <div className="text-section">
                    <p className="card-title">BUDGET</p>
                    <h2 className="card-number">$24K</h2>
                    <div className="card-status">
                        <span className="status-down" style={{
                            color: "#65C15C"
                        }}>↑ 16%</span>
                        <span className="status-desc">Since last month</span>
                    </div>
                </div>
                <div className="icon-section">
                    <div className="icon-circle" style={{
                        backgroundColor: "#635BFF"
                    }}>
                        <BiDollar className="card-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}