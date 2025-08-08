import "./productList.css"
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import ProductItems from "./ProductItems.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
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
    const [searchItem, setSearchItem] = useState("");
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
            try {
                await axios.delete(`https://6879bbed63f24f1fdca2bb76.mockapi.io/api/v1/ega-furniture/products/${id}`);
                fetchProducts();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    }
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentItems = filteredProducts.slice(itemOffset, endOffset);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <div className="product-list-container">
            <header>
                <h1>Danh sách sản phẩm</h1>
            </header>

            <div className="top-bar">
                <div className="top-right">
                    <input type="text" placeholder="Tìm kiếm theo tên..."
                           onChange={(e) => setSearchItem(e.target.value)}/>
                    <Link to="/ega/dashboard/products/add">
                        <button className="add-product-btn">+ Thêm sản phẩm</button>
                    </Link>
                </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th>TÊN SẢN PHẨM</th>
                    <th>LOẠI</th>
                    <th>GIÁ GỐC</th>
                    <th>GIÁ SALE</th>
                    <th>ĐÁNH GIÁ</th>
                    <th colSpan={2}></th>
                </tr>
                </thead>
                <tbody>
                <ProductItems currentItems={currentItems} handleDelete={handleDelete}/>
                </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="pagination"
                activeClassName="active"
                marginPagesDisplayed={2}
                pageClassName="page-item"
                previousClassName="page-item"
                nextClassName="page-item"
                breakClassName="page-item"
            />
        </div>
    )
}