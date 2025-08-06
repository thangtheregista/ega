import React, {useEffect, useState} from "react";
import "../AuthorsTable/AuthorsTable.css";
import CustomerItems from "./CustomerItems.jsx";
import ReactPaginate from 'react-paginate';
import "./customerTable.css"
import axios from "axios";

export default function CustomersTable() {
    const [authors, setAuthors] = useState([])
    const fetchAuthors = async () => {
        try {
            const response = await axios.get("https://6887fd68adf0e59551b8be5e.mockapi.io/users/")
            setAuthors(response.data.filter((author) => author.role === "customer"))
        } catch (error) {
            console.error("Error fetching authors:", error);
        }
    }

    //react-paginate
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const pageCount = Math.ceil(authors.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % authors.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    useEffect(() => {
        fetchAuthors()
    }, []);
    const [searchItem, setSearchItem] = useState("");
    const filteredAuthors = authors.filter((author) => {
        return author.email.toLowerCase().includes(searchItem.toLowerCase());
    });
    const currentItems = filteredAuthors.slice(itemOffset, endOffset);
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa khách hàng này không?")) {
            try {
                await axios.delete(`https://6887fd68adf0e59551b8be5e.mockapi.io/users/${id}`);
                fetchAuthors();
            } catch (error) {
                console.error("Error deleting author:", error);
            }
        }
    }
    return(

            <div className="table-container">
                <div className="d-flex flex-column justify-content-center align-items-start mb-3">
                    <h2>Danh sách khách hàng</h2>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <span>Tìm kiếm:</span>
                            <input type="text" placeholder="Tìm kiếm bằng email!" onChange={(e) => setSearchItem(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>TÊN</th>
                        <th>TỔNG SẢN PHẨM ĐÃ MUA</th>
                        <th>ĐỊA CHỈ</th>
                        <th>SỐ ĐIỆN THOẠI</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <CustomerItems currentItems={currentItems} handleDelete={handleDelete}/>
                    </tbody>
                </table>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
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