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

    const currentItems = authors.slice(itemOffset, endOffset);
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
    return(

            <div className="table-container">
                <div className="d-flex flex-column justify-content-center align-items-start mb-3">
                    <h2>Customers list</h2>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <span>Search:</span>
                            <input type="text" placeholder="Search by name or email" />
                        </div>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>LOCATION</th>
                        <th>PHONE</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <CustomerItems currentItems={currentItems}/>
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