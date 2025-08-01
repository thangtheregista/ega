import React from "react";
import Header from "../Navbar/Header.jsx";
import Footer from "../Navbar/Footer.jsx";
import "../Navbar/Header.css";
import "../Navbar/Footer.css";
import FloatingButtons from "../floatingButtons/FloatingButtons.jsx";

export default function Introduce() {
    return (
        <>
            <Header />

            <div className="gioithieu-container">
                <div className="breadcrumb">
                    <a href="/">Trang chủ</a> / <span>  Giới thiệu</span>
                </div>

                <h1 className="page-title">Giới thiệu</h1>

                <div className="content">
                    <p>
                        <strong>EGA – Nghệ thuật tạo dựng không gian sống từ năm 2000</strong>
                    </p>
                    <p>
                        EGA là một công ty nội thất danh tiếng chuyên tạo ra những không gian nội thất tinh tế từ khi
                        thành lập vào năm 2000. Với niềm đam mê thiết kế, tinh hoa nghệ thuật và sự hài lòng của khách
                        hàng, EGA đã khẳng định vị thế là một nhà cung cấp hàng đầu về nội thất cao cấp, bao gồm giường
                        ngủ, ghế, bộ phòng ngủ, nội thất phòng khách và nhiều hơn nữa.
                    </p>
                    <p>
                        Những người sáng lập của EGA, truyền cảm hứng từ tình yêu chung đối với sự sáng tạo nghệ thuật
                        và mong muốn đem đến sự đổi mới cho ngành công nghiệp nội thất, đã bắt đầu một hành trình để tái
                        định nghĩa không gian sống. Tên gọi EGA được lựa chọn cẩn thận để phản ánh những giá trị cốt
                        lõi của công ty: Tinh tế, Duyên dáng và Nghệ thuật.
                    </p>
                    <p>
                        Suốt nhiều năm qua, EGA đã phát triển từ một cửa hàng địa phương nhỏ thành một thương hiệu toàn
                        cầu, phục vụ những khách hàng kén chọn tìm kiếm không chỉ nội thất mà còn là những tác phẩm
                        nghệ thuật thể hiện phong cách sống riêng của họ. Hành trình đó đã là cuộc hội ngộ của sự sáng
                        tạo, tận tâm và sự theo đuổi không ngừng nghỉ của sự hoàn mỹ.
                    </p>
                    <p>
                        Ở trái tim thành công của EGA nằm cam kết vững chắc về chất lượng. Mỗi món nội thất được thử
                        công tỉ mỉ bởi những thợ thủ công tài ba sử dụng những vật liệu tốt nhất được lựa chọn từ các
                        nhà cung cấp bền vững. Sự tận tụy này đảm bảo mỗi sản phẩm rời khỏi xưởng EGA đều toả sáng bằng
                        sự tinh tế và sự bền bỉ, vượt qua thử thách thời gian một cách dễ dàng.
                    </p>
                    <p>
                        Bộ sưu tập sản phẩm của EGA nổi bật với đa dạng dáng kinh ngạc để phục vụ các sở thích và nhu
                        cầu đa dạng. Bộ sưu tập phòng ngủ toả sự thoải mái và bình yên, với những chiếc giường thiết kế
                        tinh tế mới gọi bạn thư giãn sau một ngày dài. Các bộ phòng khách, kết hợp giữa phong cách và
                        tính năng, tạo nên không gian chào đón cho các buổi tụ tập gia đình và bạn bè.
                    </p>
                </div>
            </div>

            <Footer />
            <FloatingButtons />

            <style>{`
.gioithieu-container {
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 60px 15px;
  font-family: "SVN-Gilroy", Arial, sans-serif;
  line-height: 1.8;
  background-color: #fff;
}

.breadcrumb {
  font-size: 14px;
  color: #777;
  margin-bottom: 25px;
}

.breadcrumb a {
  color: #777;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: #f97b22;
}

.breadcrumb span {
  color: #000;
  font-weight: 500;
}

.page-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #222;
}

.content p {
  margin-bottom: 18px;
  color: #333;
  font-size: 16px;
}

.content strong {
  font-weight: 600;
}
`}</style>
        </>
    );
}