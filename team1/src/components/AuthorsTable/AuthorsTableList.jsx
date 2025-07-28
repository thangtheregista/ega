import React, {useState} from "react";
import "./AuthorsTable.css";
import anh1 from '../../pages/staff/images/anh1.jpg';
import anh2 from '../../pages/staff/images/anh2.jpg';
import anh3 from '../../pages/staff/images/anh3.jpg';
import anh4 from '../../pages/staff/images/anh4.jpg';
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import AuthorItems from "./AuthorItems.jsx";


const authors = [
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        team: "Organization",
        status: "online",
        date: "23/04/18",
        avatar: anh1
    },
    {
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        role: "Programator",
        team: "Developer",
        status: "offline",
        date: "11/01/19",
        avatar: anh2
    },
    {
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        role: "Executive",
        team: "Projects",
        status: "online",
        date: "19/09/17",
        avatar: anh3
    },
    {
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        role: "Programator",
        team: "Developer",
        status: "online",
        date: "24/12/08",
        avatar: anh4
    },
    {
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        role: "Programator",
        team: "Developer",
        status: "online",
        date: "24/12/08",
        avatar: anh4
    },
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        team: "Organization",
        status: "online",
        date: "23/04/18",
        avatar: anh1
    },
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        team: "Organization",
        status: "online",
        date: "23/04/18",
        avatar: anh1
    }
    ,
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        team: "Organization",
        status: "online",
        date: "23/04/18",
        avatar: anh1
    }
    ,
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        team: "Organization",
        status: "online",
        date: "23/04/18",
        avatar: anh1
    }
    ,

];


export default function AuthorsTable() {
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
    return (
        <div>
            <div className="table-container">
                <div className="d-flex flex-column justify-content-center align-items-start mb-3">
                    <h2>Staff list</h2>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <span>Search:</span>
                            <input type="text" placeholder="Search by name or email" />
                        </div>
                        <Link to="/ega/dashboard/staff/add">
                            <button className="btn btn-primary">Add staff</button>
                        </Link>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>STATUS</th>
                        <th>EMPLOYED</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                {/*    {authors.map((author, index) => (*/}
                {/*        <tr key={index}>*/}
                {/*            <td className="author-cell">*/}
                {/*                <img src={author.avatar} alt={author.name} />*/}
                {/*                <div>*/}
                {/*                    <div className="name">{author.name}</div>*/}
                {/*                    <div className="email">{author.email}</div>*/}
                {/*                </div>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                <div className="role">{author.role}</div>*/}
                {/*                <div className="team">{author.team}</div>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*<span className={`status ${author.status}`}>*/}
                {/*  {author.status.toUpperCase()}*/}
                {/*</span>*/}
                {/*            </td>*/}
                {/*            <td>{author.date}</td>*/}
                {/*            <td>*/}
                {/*                <button className="edit-btn">Edit</button>*/}
                {/*                <button className="edit-btn">Delete</button>*/}
                {/*                <button className="edit-btn">Reset Password</button>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*    ))}*/}
                    <AuthorItems currentItems={currentItems} />
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
