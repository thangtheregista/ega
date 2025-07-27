import React from "react";
import "./AuthorsTable.css";
import anh1 from '../../pages/staff/images/anh1.jpg';
import anh2 from '../../pages/staff/images/anh2.jpg';
import anh3 from '../../pages/staff/images/anh3.jpg';
import anh4 from '../../pages/staff/images/anh4.jpg';
import {Link} from "react-router-dom";


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
                    {authors.map((author, index) => (
                        <tr key={index}>
                            <td className="author-cell">
                                <img src={author.avatar} alt={author.name} />
                                <div>
                                    <div className="name">{author.name}</div>
                                    <div className="email">{author.email}</div>
                                </div>
                            </td>
                            <td>
                                <div className="role">{author.role}</div>
                                <div className="team">{author.team}</div>
                            </td>
                            <td>
                <span className={`status ${author.status}`}>
                  {author.status.toUpperCase()}
                </span>
                            </td>
                            <td>{author.date}</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="edit-btn">Delete</button>
                                <button className="edit-btn">Reset Password</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
