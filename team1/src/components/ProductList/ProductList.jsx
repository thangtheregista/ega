import "./productList.css"
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export default function ProductList() {
    const [products, setProducts] = useState([])
    const fetchProducts = async ( ) => {
        try {
            const response = await axios.get(`https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products`)
            setProducts(response.data.reverse())
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    return (
        <div className="product-list-container">
            <header>
                <h1>Product List</h1>
            </header>

            <div className="top-bar">
                <div className="top-right">
                    <input type="text" placeholder="Search..."/>
                    <Link to="/ega/dashboard/products/add">
                        <button className="add-product-btn">+ Add Products</button>
                    </Link>
                </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr>
                        <td><img src={product.pic}/>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.salePrice}</td>
                        <td><span className="stars">{product.rating}</span></td>
                        <td className="actions">✎ 🗑</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}