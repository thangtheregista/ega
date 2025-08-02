import React, {useEffect, useState} from "react";
import "./AuthorsTable.css";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import AuthorItems from "./AuthorItems.jsx";
import axios from "axios";

export default function AuthorsTable() {
    const [authors, setAuthors] = useState([]);
    const fetchAuthors = async () => {
        try {
            const response = await axios.get("https://6887fd68adf0e59551b8be5e.mockapi.io/users?role=staff")
            setAuthors(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchAuthors();
    }, [])
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
    const [searchItem, setSearchItem] = useState("");
    const filteredStaffs = authors.filter((staff) => {
        return staff.email.toLowerCase().includes(searchItem.toLowerCase());
    })
    const currentItems = filteredStaffs.slice(itemOffset, endOffset);
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa nhân viên này không?")) {
            try {
                await axios.delete(`https://6887fd68adf0e59551b8be5e.mockapi.io/users/${id}`);
                fetchAuthors();
            } catch (error) {
                console.error(error);
            }
        }
    }
    return (
        <div>
            <div className="table-container">
                <div className="d-flex flex-column justify-content-center align-items-start mb-3">
                    <h2>Danh sách nhân viên</h2>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <span>Tìm kiếm:</span>
                            <input type="text" placeholder="Tìm kiếm bằng email!" onChange={(e) => setSearchItem(e.target.value)} />
                        </div>
                        <Link to="/ega/dashboard/staff/add">
                            <button className="btn btn-primary">Thêm nhân viên</button>
                        </Link>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>TÊN</th>
                        <th>CHỨC VỤ VÀ PHÒNG BAN</th>
                        <th>TRẠNG THÁI</th>
                        <th>NGÀY GIA NHẬP</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <AuthorItems currentItems={currentItems} handleDelete={handleDelete} />
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
        </div>
    );
}
