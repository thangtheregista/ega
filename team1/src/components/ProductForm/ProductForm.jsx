import "./productForm.css"
import {useEffect, useState} from "react";
import axios from "axios";
export default function ProductForm() {
    const [products, setProducts] = useState([])
    const [formData, setFormData] = useState({
        pic: "",
        pic2: "",
        small1: "",
        small2: "",
        small3: "",
        name: "",
        rating: "",
        salePrice: "",
        originalPrice: "",
        sold: "🔥 Sắp cháy hàng",
        progress: 90,
        category: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
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
        }
        else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const maxId = products.length > 0 ? Math.max(...products.map(u => u.id)) : 0;

        try {
            await axios.post(`https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products`, {
                id: maxId + 1,
                ...formData
            })
            setFormData({
                pic: "",
                pic2: "",
                small1: "",
                small2: "",
                small3: "",
                name: "",
                rating: "",
                salePrice: "",
                originalPrice: "",
                sold: "🔥 Sắp cháy hàng",
                progress: 90,
                category: ""
            })
            alert("Product added successfully!")

        } catch (error) {
            console.error(error)
        }
    }
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products`)
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    return (
        <div className="product-form">
            <h2 className="product-form__title">Add Product</h2>
            <form className="product-form__body">
                <div className="product-form__row">
                    <div className="product-form__group">
                        <label className="product-form__label">Product Name</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Product Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="product-form__group">
                        <label className="product-form__label">Original Price</label>
                        <input type="text"
                               className="product-form__input"
                               placeholder="Original Price"
                               name="originalPrice"
                               value={formData.originalPrice}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="product-form__group">
                        <label className="product-form__label">Sale Price</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Sale Price"
                            name="salePrice"
                            value={formData.salePrice}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="product-form__row">
                    <div className="product-form__group">
                        <label className="product-form__label">Image 1 URL</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Image 1 URL"
                            name="pic"
                            value={formData.pic}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="product-form__group">
                        <label className="product-form__label">Image 2 URL</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Image 2 URL"
                            name="pic2"
                            value={formData.pic2}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="product-form__group">
                        <label className="product-form__label">Image 3 URL</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Image 3 URL"
                            name="small3"
                            value={formData.small3}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="product-form__row">
                    <div className="product-form__group">
                        <label className="product-form__label">Category</label>
                        <input
                            type="text"
                            className="product-form__input"
                            placeholder="Category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="product-form__group">
                        <label className="product-form__label">Rating</label>
                        <select className="product-form__input" name="rating" value={formData.rating} onChange={handleInputChange}>
                            <option value="⭐">★☆☆☆☆</option>
                            <option value="⭐⭐">★★☆☆☆</option>
                            <option value="⭐⭐⭐">★★★☆☆</option>
                            <option value="⭐⭐⭐⭐">★★★★☆</option>
                            <option value="⭐⭐⭐⭐⭐">★★★★★</option>
                        </select>
                    </div>
                </div>

                {/*<div className="product-form__row">*/}
                {/*    <div className="product-form__group product-form__group--full">*/}
                {/*        <label className="product-form__label">Description</label>*/}
                {/*        <textarea className="product-form__input product-form__input--textarea"*/}
                {/*                  placeholder="Product description..."></textarea>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="product-form__actions">
                    <button type="submit" className="product-form__button product-form__button--primary" onClick={handleSubmit}>Add Product
                    </button>
                    {/*<button type="button" className="product-form__button product-form__button--secondary">Cancel*/}
                    {/*</button>*/}
                </div>
            </form>
        </div>
    )
}