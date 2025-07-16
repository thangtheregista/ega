import "./productCategories.css"
export default function ProductCategories() {
    return (
        <div className="categories">
            <h2 className="categories__title">DANH MỤC SẢN PHẨM</h2>
            <div className="categories__list">
                <div className="categories__item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/491/756/themes/956460/assets/season_coll_1_img.png?1746582633520" alt="Phòng khách" className="categories__image"/>
                    <h3 className="categories__name">Phòng khách</h3>
                    <p className="categories__count">11 sản phẩm</p>
                </div>
                <div className="categories__item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/491/756/themes/956460/assets/season_coll_2_img.png?1746582633520" alt="Phòng ngủ" className="categories__image"/>
                    <h3 className="categories__name">Phòng ngủ</h3>
                    <p className="categories__count">8 sản phẩm</p>
                </div>
                <div className="categories__item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/491/756/themes/956460/assets/season_coll_3_img.png?1746582633520" alt="Nhà bếp" className="categories__image"/>
                    <h3 className="categories__name">Nhà bếp</h3>
                    <p className="categories__count">8 sản phẩm</p>
                </div>
                <div className="categories__item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/491/756/themes/956460/assets/season_coll_4_img.png?1746582633520" alt="Phòng làm việc" className="categories__image"/>
                    <h3 className="categories__name">Phòng làm việc</h3>
                    <p className="categories__count">9 sản phẩm</p>
                </div>
                <div className="categories__item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/491/756/themes/956460/assets/season_coll_5_img.png?1746582633520" alt="Đèn trang trí" className="categories__image"/>
                    <h3 className="categories__name">Đèn trang trí</h3>
                    <p className="categories__count">2 sản phẩm</p>
                </div>
                <div className="categories__item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/491/756/themes/956460/assets/season_coll_6_img.png?1746582633520" alt="Kệ lưu giữ" className="categories__image"/>
                    <h3 className="categories__name">Kệ lưu giữ</h3>
                    <p className="categories__count">11 sản phẩm</p>
                </div>
            </div>
        </div>
    )
}