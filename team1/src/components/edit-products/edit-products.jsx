import React from "react";
import "./edit-products.css"
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function EditProducts() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        pic: "",
        pic2: "",
        small1: "",
        small2: "",
        small3: "",
        name: "",
        rating: "",
        salePrice: "",
        originalPrice: "",
        category: "",
        date: new Date().toISOString().split('T')[0]
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if (name === "pic") {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
                small1: value
            }));
        } else if (name === "pic2") {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
                small2: value
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    }
    const [errors, setErrors] = React.useState({});

    function handleValidate() {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Tên sản phẩm không được để trống";
        }
        if (!formData.originalPrice) {
            newErrors.originalPrice = "Giá gốc không được để trống";
        }
        if (!formData.salePrice) {
            newErrors.salePrice = "Giá sale không được để trống";
        }
        if (!formData.pic) {
            newErrors.pic = "URL ảnh 1 không được để trống";
        }
        if (!formData.pic2) {
            newErrors.pic2 = "URL ảnh 2 không được để trống";
        }
        if (!formData.small3) {
            newErrors.small3 = "URL ảnh 3 không được để trống";
        }
        if (!formData.category) {
            newErrors.category = "Loại sản phẩm không được để trống";
        }
        if (!formData.rating) {
            newErrors.rating = "Đánh giá không được để trống";
        }
        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        } else {
            setErrors({});
        }
        try {
            const updatedData = {
                ...formData,
                date: new Date().toISOString().split('T')[0]
            };
            await axios.put(`https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products/${id}`, updatedData);
            alert("Cập nhật sản phẩm thành công!");
            navigate("/ega/dashboard/products");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    }
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products/${id}`);
            setFormData(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }
    React.useEffect(() => {
        fetchProduct();
    }, [id]);
    return (
        <div className="product-form">
            <h2 className="product-form__title">Sửa sản phẩm</h2>
            <form className="product-form__body" onSubmit={handleSubmit}>
                <div className="product-form__row">
                    <div className="product-form__group">
                        <label className="product-form__label">Tên sản phẩm</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Tên sản phẩm"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    <div className="product-form__group">
                        <label className="product-form__label">Giá gốc</label>
                        <input type="text"
                               className="product-form__input"
                               placeholder="Giá gốc"
                               name="originalPrice"
                               value={formData.originalPrice}
                               onChange={handleInputChange}
                        />
                        {errors.originalPrice && <span className="error-message">{errors.originalPrice}</span>}
                    </div>
                    <div className="product-form__group">
                        <label className="product-form__label">Giá sale</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Giá sale"
                            name="salePrice"
                            value={formData.salePrice}
                            onChange={handleInputChange}
                        />
                        {errors.salePrice && <span className="error-message">{errors.salePrice}</span>}
                    </div>
                </div>

                <div className="product-form__row">
                    <div className="product-form__group">
                        <label className="product-form__label">URL ảnh 1</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="URL ảnh 1"
                            name="pic"
                            value={formData.pic}
                            onChange={handleInputChange}
                        />
                        {errors.pic && <span className="error-message">{errors.pic}</span>}
                    </div>

                    <div className="product-form__group">
                        <label className="product-form__label">URL ảnh 2</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="URL ảnh 2"
                            name="pic2"
                            value={formData.pic2}
                            onChange={handleInputChange}
                        />
                        {errors.pic2 && <span className="error-message">{errors.pic2}</span>}
                    </div>
                    <div className="product-form__group">
                        <label className="product-form__label">URL ảnh 3</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="URL ảnh 3"
                            name="small3"
                            value={formData.small3}
                            onChange={handleInputChange}
                        />
                        {errors.small3 && <span className="error-message">{errors.small3}</span>}
                    </div>
                </div>

                <div className="product-form__row">
                    <div className="product-form__group">
                        <label className="product-form__label">Loại</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Loại"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        />
                        {errors.category && <span className="error-message">{errors.category}</span>}
                    </div>
                    <div className="product-form__group">
                        <label className="product-form__label">Đánh giá</label>
                        <select className="product-form__input" name="rating" value={formData.rating}
                                onChange={handleInputChange}>
                            <option value="⭐">★☆☆☆☆</option>
                            <option value="⭐⭐">★★☆☆☆</option>
                            <option value="⭐⭐⭐">★★★☆☆</option>
                            <option value="⭐⭐⭐⭐">★★★★☆</option>
                            <option value="⭐⭐⭐⭐⭐">★★★★★</option>
                        </select>
                        {errors.rating && <span className="error-message">{errors.rating}</span>}
                    </div>
                </div>
                <div className="product-form__actions">
                    <button className="edit-profile__button" type="submit">Cập nhật</button>
                    <button className="back__button" type="button" onClick={() => navigate("/ega/dashboard/products")}>Quay lại
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditProducts;