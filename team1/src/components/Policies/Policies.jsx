import "./policies.css"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsBox } from "react-icons/bs";
import { IoReturnDownBackOutline } from "react-icons/io5";


export default function Policies() {
    return (
        <div className="policies">
            <div className="policies__item">
                <div className="policies__icon"><IoChatbubbleEllipsesOutline />
                </div>
                <div className="policies__text">
                    <h4>Hotline: 19001993</h4>
                    <p>Dịch vụ hỗ trợ bạn 24/7</p>
                </div>
            </div>

            <div className="policies__item">
                <div className="policies__icon"><BsBox />
                </div>
                <div className="policies__text">
                    <h4>Quà tặng hấp dẫn</h4>
                    <p>Nhiều ưu đãi khuyến mãi hot</p>
                </div>
            </div>

            <div className="policies__item">
                <div className="policies__icon"><IoReturnDownBackOutline />
                </div>
                <div className="policies__text">
                    <h4>Đổi trả miễn phí</h4>
                    <p>Trong vòng 7 ngày</p>
                </div>
            </div>

            <div className="policies__item">
                <div className="policies__icon">$</div>
                <div className="policies__text">
                    <h4>Giá luôn tốt nhất</h4>
                    <p>Hoàn tiền nếu nơi khác rẻ hơn</p>
                </div>
            </div>
        </div>
    )
}